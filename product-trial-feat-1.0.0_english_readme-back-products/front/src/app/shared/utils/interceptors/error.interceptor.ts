import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackbarService } from 'app/shared/utils/snackbar/snackbar.service';
import { catchError, EMPTY, Observable, of } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly snackbarService: SnackbarService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          return this.returnError(err.status);
        }
        this.snackbarService.displayError();
        return EMPTY;
      })
    )
  }

  private returnError(status: number) {
    // this.snackbarService.displayError('Item(s) not found');
    return of(new HttpResponse({ status, body: null }));
  }

}