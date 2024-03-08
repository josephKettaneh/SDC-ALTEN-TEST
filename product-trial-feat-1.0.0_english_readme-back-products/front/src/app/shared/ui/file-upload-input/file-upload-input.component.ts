import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SnackbarService } from 'app/shared/utils/snackbar/snackbar.service';

@Component({
  selector: 'app-file-upload-input',
  templateUrl: './file-upload-input.component.html',
  styleUrls: ['./file-upload-input.component.scss']
})
export class FileUploadInputComponent implements OnChanges {

  @Input() maxFileSize: number; // Maximum file size allowed in bytes
  @Input() accept: 'image/*' | string; // string can take a value of a file_extension or a media_type
  @Input() displayImage: boolean;
  @Input() imgSrc: string = '';
  @Input() inputLabel: string = 'Upload a file';
  @Output() fileUploaded: EventEmitter<{ data: string | ArrayBuffer; file: File }> = new EventEmitter();
  @Output() fileDeleted: EventEmitter<{}> = new EventEmitter();

  public isDraggedOver = false;
  public importedFile: File;
  public importedData: string | ArrayBuffer;
  public filename = '';

  constructor(
    private readonly snackbarService: SnackbarService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.imgSrc && changes.imgSrc.previousValue !== changes.imgSrc.currentValue) {
      this.filename = this.imgSrc.substring(this.imgSrc.lastIndexOf('/') + 1);
    }
  }

  public onFileUploaded(fileInput: HTMLInputElement): void {
    const filesList: FileList = fileInput.files;
    if (filesList.length) {
      this.importedFile = filesList[0];

      if (this.maxFileSize && this.importedFile.size > this.maxFileSize) {
        this.snackbarService.displayError('File too big');
        this.importedFile = null;
        return;
      }

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        this.importedData = loadEvent.target.result;
        this.fileUploaded.emit({ data: this.importedData, file: this.importedFile });
      };
      if (this.accept === 'audio/*' || this.accept === 'video/*' || this.accept === 'image/*') {
        reader.readAsDataURL(this.importedFile);
      } else {
        reader.readAsText(this.importedFile, 'utf8');
      }
    }
  }

  public onDrop(event: DragEvent, fileInput: HTMLInputElement): void {
    fileInput.files = event.dataTransfer.files;
    this.isDraggedOver = false;
    this.onFileUploaded(fileInput);
    this.prevent(event);
  }

  public onDragOver(event: DragEvent): void {
    this.isDraggedOver = true;
    this.prevent(event);    
  }

  public onDragLeave(event: DragEvent): void {
    this.isDraggedOver = false;
    this.prevent(event);    
  }

  public openImg(): void {
    window.open(this.imgSrc);
  }

  public clear(fileInput: HTMLInputElement): void {
    // this.importedFile = null;
    // this.importedData = null;
    // fileInput.value = null;
    // this.filename = '';
    this.fileDeleted.emit({});
  }

  public prevent(event: DragEvent): void {
    event.preventDefault();
  }
}
