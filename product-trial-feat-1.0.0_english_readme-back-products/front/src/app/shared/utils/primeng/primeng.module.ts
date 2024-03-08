import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessageService } from "primeng/api";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BadgeModule } from "primeng/badge";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { FileUploadModule } from "primeng/fileupload";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ListboxModule } from "primeng/listbox";
import { MenuModule } from "primeng/menu";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { ProgressBarModule } from "primeng/progressbar";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from "primeng/rating";
import { SidebarModule } from 'primeng/sidebar';
import { StepsModule } from "primeng/steps";
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from "primeng/tooltip";


@NgModule({
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ListboxModule,
    FileUploadModule,
    CheckboxModule,
    BreadcrumbModule,
    InputNumberModule,
    CalendarModule,
    DataViewModule,
    RatingModule,
    ChipsModule,
    ChipModule,
    InputSwitchModule,
    InputTextareaModule,
    DynamicDialogModule,
    StepsModule,
    CardModule,
    AutoCompleteModule,
    TabMenuModule,
    TabViewModule,
    BadgeModule,
    MenuModule,
    OverlayPanelModule,
    ProgressBarModule,
    MessageModule,
    TooltipModule,
    ToolbarModule,
    MultiSelectModule,
    ConfirmDialogModule,
    ToastModule,
    SidebarModule,
    ColorPickerModule,
    ProgressSpinnerModule
  ],
  exports: [
    TableModule,
    PaginatorModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ListboxModule,
    FileUploadModule,
    CheckboxModule,
    BreadcrumbModule,
    InputNumberModule,
    CalendarModule,
    DataViewModule,
    RatingModule,
    ChipsModule,
    ChipModule,
    InputSwitchModule,
    InputTextareaModule,
    DynamicDialogModule,
    StepsModule,
    CardModule,
    AutoCompleteModule,
    TabMenuModule,
    TabViewModule,
    BadgeModule,
    MenuModule,
    OverlayPanelModule,
    ProgressBarModule,
    MessageModule,
    TooltipModule,
    ToolbarModule,
    MultiSelectModule,
    ConfirmDialogModule,
    ToastModule,
    SidebarModule,
    ColorPickerModule,
    ProgressSpinnerModule
  ],
  providers: [
    DialogService,
    MessageService
  ],
})
export class PrimeNGModule { }
