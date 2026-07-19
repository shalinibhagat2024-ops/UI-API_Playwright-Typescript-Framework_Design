import { ButtonComponent } from "@core/helpers/components/ButtonComponent";
import { CalendarComponent } from "@core/helpers/components/CalendarComponent";
import { CheckboxComponent } from "@core/helpers/components/CheckboxComponent";
import { DropdownComponent } from "@core/helpers/components/DropdownComponent";
import { FileUploadComponent } from "@core/helpers/components/FileUploadComponent";
import { GridComponent } from "@core/helpers/components/GridComponent";
import { ModalComponent } from "@core/helpers/components/ModalComponent";
import { PaginationComponent } from "@core/helpers/components/PaginationComponent";
//import { ProgressBarComponent } from "../components/ProgressBarComponent";
import { RadioButtonComponent } from "@core/helpers/components/RadioButtonComponent";
//import { RichTextEditorComponent } from "../components/RichTextEditorComponent";
//import { SliderComponent } from "../components/SliderComponent";
import { TableComponent } from "@core/helpers/components/TableComponent";
//import { TabsComponent } from "../components/TabsComponent";
import { TextBoxComponent } from "@core/helpers/components/TextBoxComponent";
import { ToastComponent } from "@core/helpers/components/ToastComponent";
import { Locator, Page } from "@playwright/test";
//import { TooltipComponent } from "../components/TooltipComponent";
//import { TreeComponent } from "../components/TreeComponent";

export class UIManager {
  constructor(private readonly page: Page) {}

  /**
   * TextBox
   */
  public textbox(locator: Locator): TextBoxComponent {
    return new TextBoxComponent(this.page, locator);
  }

  /**
   * Button
   */
  public button(locator: Locator): ButtonComponent {
    return new ButtonComponent(this.page, locator);
  }

  /**
   * Checkbox
   */
  public checkbox(locator: Locator): CheckboxComponent {
    return new CheckboxComponent(this.page, locator);
  }

  // /**
  //  * Radio Button
  //  */
  public radio(locator: Locator): RadioButtonComponent {
    return new RadioButtonComponent(this.page, locator);
  }

  // /**
  //  * Dropdown
  //  */
  public dropdown(locator: Locator): DropdownComponent {
    return new DropdownComponent(this.page, locator);
  }

  // /**
  //  * Calendar / Date Picker
  //  */
  public calendar(locator: Locator): CalendarComponent {
    return new CalendarComponent(this.page, locator);
  }

  // /**
  //  * File Upload
  //  */
  public upload(locator: Locator): FileUploadComponent {
    return new FileUploadComponent(this.page, locator);
  }

  // /**
  //  * Table
  //  */
  public table(locator: Locator): TableComponent {
    return new TableComponent(this.page, locator);
  }

  // /**
  //  * Grid
  //  */
  public grid(locator: Locator): GridComponent {
    return new GridComponent(this.page, locator);
  }

  // /**
  //  * Pagination
  //  */
  public pagination(locator: Locator): PaginationComponent {
    return new PaginationComponent(this.page, locator);
  }

  // /**
  //  * Modal
  //  */
  public modal(locator: Locator): ModalComponent {
    return new ModalComponent(this.page, locator);
  }

  // /**
  //  * Toast
  //  */
  public toast(locator: Locator): ToastComponent {
    return new ToastComponent(this.page, locator);
  }

  // /**
  //  * Tooltip
  //  */
  // public tooltip(locator: Locator): TooltipComponent {
  //   return new TooltipComponent(this.page, locator);
  // }

  // /**
  //  * Tabs
  //  */
  // public tabs(locator: Locator): TabsComponent {
  //   return new TabsComponent(this.page, locator);
  // }

  // /**
  //  * Tree
  //  */
  // public tree(locator: Locator): TreeComponent {
  //   return new TreeComponent(this.page, locator);
  // }

  // /**
  //  * Slider
  //  */
  // public slider(locator: Locator): SliderComponent {
  //   return new SliderComponent(this.page, locator);
  // }

  // /**
  //  * Progress Bar
  //  */
  // public progressBar(locator: Locator): ProgressBarComponent {
  //   return new ProgressBarComponent(this.page, locator);
  // }

  // /**
  //  * Rich Text Editor
  //  */
  // public richTextEditor(locator: Locator): RichTextEditorComponent {
  //   return new RichTextEditorComponent(this.page, locator);
  // }
}
