import "../../chunks/chunk.FQWJN7AO.js";
import "../../chunks/chunk.DYYIIZPZ.js";
import "../../chunks/chunk.K7IFCJCW.js";
import "../../chunks/chunk.AFBGVPX2.js";
import "../../chunks/chunk.FSBXRO6N.js";
import "../../chunks/chunk.5AAXKTSO.js";
import "../../chunks/chunk.D6N6Z2UH.js";
import "../../chunks/chunk.F33MBUAV.js";
import "../../chunks/chunk.SRHT6JKE.js";
import "../../chunks/chunk.CFKDY3QJ.js";
import "../../chunks/chunk.D4QL7DP6.js";
import {
  MteIconRegistryService
} from "../../chunks/chunk.L7F3KXB6.js";
import {
  CoreColorMixin,
  DisabledMixin,
  FieldsetMixin,
  MteElement,
  RadiusMixin,
  ResponsiveValueConverter,
  SizeMixin,
  SlotObserverMixin,
  StylePartsMixin,
  __decorateClass,
  defineElement,
  eventEmitter,
  isSsr,
  onUpdate,
  styles5 as styles,
  styles7 as styles2
} from "../../chunks/chunk.Y4EV6E5D.js";

// src/atomic/file-upload/file-upload-input.element.ts
import { html } from "lit";
import { property, query } from "lit/decorators.js";

// src/atomic/file-upload/file-upload-input.styles.ts
import { css } from "lit";
var styles3 = css`:host([withoutLabel]) .label-container{position:absolute}.visually-hidden,:host([withoutLabel]) .label{height:1px!important;position:absolute!important;width:1px!important;clip:rect(0 0 0 0)!important;border:none!important;clip-path:inset(50%)!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important}`;

// src/atomic/file-upload/file-upload-input.element.ts
import { FormControlMixin, requiredValidator } from "@open-wc/form-control";
import { ifDefined } from "lit-html/directives/if-defined.js";
var uniqueFileIndex = 0;
var MteFileUploadInput = class extends FormControlMixin(
  DisabledMixin(
    CoreColorMixin(
      RadiusMixin(
        SizeMixin(
          FieldsetMixin(
            SlotObserverMixin(
              StylePartsMixin(MteElement)
            )
          )
        )
      )
    )
  )
) {
  constructor() {
    super(...arguments);
    this.withoutLabel = false;
    this.multiple = false;
    this.required = false;
    this.showRequired = false;
    this.filled = false;
    this.outlined = false;
    this.iconLibrary = "_default";
    this.rightIconLibrary = "_default";
    this.loading = false;
    this.rightIconHidden = false;
    this.iconHidden = false;
    this.files = [];
    this._value = null;
  }
  firstUpdated() {
    this.value = new FormData();
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.setValue(value);
  }
  fileTypeValidation(file) {
    if (!this.accept) {
      return true;
    }
    const acceptTypes = this.accept.toLowerCase().split(",").map((type) => type.trim());
    const mimeType = file.type.toLowerCase();
    const fileExtension = `${file.name.split(".").slice(-1)?.[0]}`;
    const directMatch = acceptTypes.includes(mimeType);
    const genericMatch = acceptTypes.some((acceptType) => {
      const [type, subtype] = acceptType.split("/");
      if (acceptType === `.${fileExtension}` || type === fileExtension) {
        return true;
      }
      if (acceptType === mimeType) {
        return true;
      }
      if (subtype === "*") {
        return mimeType.startsWith(`${type}/`);
      }
      return false;
    });
    return directMatch || genericMatch;
  }
  updateFiles(filesArr) {
    const formData = this.selectType === "append" ? this.value : new FormData();
    const files = filesArr.map((file) => {
      if (this.minFileSize && file.size < this.minFileSize) {
        return {
          _id: `${file.name}-${uniqueFileIndex++}`,
          name: file.name,
          file,
          error: {
            type: "MIN_FILE_SIZE",
            message: `The file is smaller than the minimum file size (${this.minFileSize} bytes).`
          }
        };
      }
      if (this.maxFileSize && file.size > this.maxFileSize) {
        return {
          _id: `${file.name}-${uniqueFileIndex++}`,
          name: file.name,
          file,
          error: {
            type: "MAX_FILE_SIZE",
            message: `The file is larger than the maximum file size (${this.maxFileSize} bytes).`
          }
        };
      }
      if (!this.fileTypeValidation(file)) {
        return {
          _id: `${file.name}-${uniqueFileIndex++}`,
          name: file.name,
          file,
          error: {
            type: "WRONG_FILE_TYPE",
            message: `The file is not one of the following types: ${this.accept}.`
          }
        };
      }
      if (this.validator) {
        const validatorDetails = this.validator(file);
        if (validatorDetails) {
          return {
            _id: `${file.name}-${uniqueFileIndex++}`,
            name: file.name,
            file,
            error: {
              type: validatorDetails.type,
              message: validatorDetails.message
            }
          };
        }
      }
      formData.append(this.name, file);
      return {
        _id: `${file.name}-${uniqueFileIndex++}`,
        name: file.name,
        file
      };
    });
    if (this.selectType === "append") {
      this.files = [...this.files, ...files];
      this._onFilesAdd.emit({ files });
      return;
    }
    this.files = files;
    this.value = formData;
    this._onFilesAdd.emit({ files: this.files });
  }
  addFiles(files) {
    if (files instanceof FileList) {
      const filesArr = Array.from(files || []);
      if (!this.multiple) {
        this.updateFiles([filesArr[0]]);
      } else {
        this.updateFiles(filesArr);
      }
      this.formControlElement.value = "";
    }
  }
  /** Removes the file by passing in the ID of the file to remove */
  removeFile(removeId) {
    const formData = new FormData();
    const files = this.files.filter(({ file, _id }) => {
      const remove = removeId === _id;
      if (!remove) {
        formData.append(this.name, file);
      }
      return !remove;
    });
    this.files = files;
    this.value = formData;
    this.formControlElement.value = "";
  }
  resetFormControl() {
    super.resetFormControl?.();
    this.files = [];
    this.formControlElement.value = "";
  }
  handleInputChange(e) {
    const filesArr = Array.from(e.target.files);
    if (!filesArr.length) {
      this._onFileDialogCancel.emit();
      return;
    }
    this.addFiles(e.target.files);
  }
  handleUploadButtonClick(e) {
    this.formControlElement.click();
    this._onClick.emit(e);
  }
  render() {
    return html`${this.instanceStyles} ${this.renderFieldsetTemplate(
      html`<mte-button part="button" id="button" color="${this.color}" size="${this.size}" radius="${this.radius}" ?filled="${this.filled}" ?disabled="${this.disabled}" ?outlined="${this.outlined}" ?iconHidden="${this.iconHidden}" ?rightIconHidden="${this.rightIconHidden}" ?loading="${this.loading}" .rightIcon="${this.rightIcon}" .icon="${this.icon}" .iconLibrary="${this.iconLibrary}" .rightIconLibrary="${this.rightIconLibrary}" w="${ifDefined(this.buttonW)}" maxw="${ifDefined(this.buttonMaxw)}" minw="${ifDefined(this.buttonMinw)}" @click="${this.handleUploadButtonClick}"><slot></slot></mte-button><input tabindex="-1" aria-labelledby="${ifDefined(this.label ? "button" : null)}" type="file" id="file-input" class="visually-hidden" name="${this.name}" accept="${this.accept}" ?required="${this.required}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this.handleInputChange}">`
    )}`;
  }
};
MteFileUploadInput.styles = [styles2, styles, styles3];
MteFileUploadInput.formControlValidators = [requiredValidator];
__decorateClass([
  property()
], MteFileUploadInput.prototype, "accept", 2);
__decorateClass([
  property({ type: Number })
], MteFileUploadInput.prototype, "maxFileSize", 2);
__decorateClass([
  property({ type: Number })
], MteFileUploadInput.prototype, "minFileSize", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "name", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "label", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "withoutLabel", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "multiple", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], MteFileUploadInput.prototype, "required", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "showRequired", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "filled", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "outlined", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "icon", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "rightIcon", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "iconLibrary", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "rightIconLibrary", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "loading", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "rightIconHidden", 2);
__decorateClass([
  property({ type: Boolean })
], MteFileUploadInput.prototype, "iconHidden", 2);
__decorateClass([
  property()
], MteFileUploadInput.prototype, "selectType", 2);
__decorateClass([
  property({ attribute: false })
], MteFileUploadInput.prototype, "validator", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteFileUploadInput.prototype, "buttonW", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteFileUploadInput.prototype, "buttonMaxw", 2);
__decorateClass([
  property({ reflect: true, converter: ResponsiveValueConverter })
], MteFileUploadInput.prototype, "buttonMinw", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadInput.prototype, "_onClick", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadInput.prototype, "_onFilesAdd", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadInput.prototype, "_onFileDialogCancel", 2);
__decorateClass([
  query("#file-input")
], MteFileUploadInput.prototype, "formControlElement", 2);
__decorateClass([
  query("#file-input")
], MteFileUploadInput.prototype, "validationTarget", 2);
__decorateClass([
  query("mte-button")
], MteFileUploadInput.prototype, "buttonElement", 2);
MteFileUploadInput = __decorateClass([
  defineElement("mte-file-upload-input")
], MteFileUploadInput);

// src/atomic/file-upload/file-upload-dropzone.element.ts
import { html as html2 } from "lit";
import { property as property2 } from "lit/decorators.js";

// src/atomic/file-upload/file-upload-dropzone.styles.ts
import { css as css2 } from "lit";
var styles4 = css2`:host{--border-color:var(--mte-border-2);--border-radius:var(--mte-border-radius-md);--background-color:transparent;align-items:center;background-color:var(--background-color);border:2px dashed var(--border-color);border-radius:var(--border-radius);display:flex;flex-direction:column;justify-content:center;padding:var(--mte-space-xl);text-align:center}:host([isDraggingOver]){--background-color:var(--mte-blue-lighter);--border-color:var(--mte-focus)}:host(:focus-within:not([disabled])){--border-color:var(--mte-focus)}:host([disabled]){cursor:not-allowed}:host([withFullWidth]){width:100%}`;

// src/atomic/file-upload/file-upload-dropzone.element.ts
import { selectorFactory } from "@mortar/styles";
var MteFileUploadDropzone = class extends SizeMixin(
  DisabledMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.isDraggingOver = false;
    this.isDraggingWithin = false;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!isSsr()) {
      this.addEventListener("dragover", this.handleDragOver);
      this.addEventListener("dragenter", this.handleDragEnter);
      this.addEventListener("dragleave", this.handleDragLeave);
      this.addEventListener("drop", this.handleDrop);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("dragover", this.handleDragOver);
    this.removeEventListener("dragenter", this.handleDragEnter);
    this.removeEventListener("dragleave", this.handleDragLeave);
    this.removeEventListener("drop", this.handleDrop);
  }
  findElementInShadowDom(root, predicate) {
    if (root instanceof Element && predicate(root)) {
      return root;
    }
    const children = root instanceof Element && root.shadowRoot ? root.shadowRoot.childNodes : root.childNodes;
    for (const child of children) {
      const found = this.findElementInShadowDom(child, predicate);
      if (found)
        return found;
    }
    if (root instanceof HTMLSlotElement) {
      const assignedNodes = root.assignedNodes({ flatten: true });
      for (const node of assignedNodes) {
        const found = this.findElementInShadowDom(node, predicate);
        if (found)
          return found;
      }
    }
    return null;
  }
  get inputElement() {
    if (this._inputElement) {
      return this._inputElement;
    }
    this._inputElement = this.findElementInShadowDom(
      this.shadowRoot,
      (element) => element instanceof MteFileUploadInput
    );
    return this._inputElement;
  }
  updateInstanceStyles(changedProps) {
    super.updateInstanceStyles(changedProps);
    let shouldUpdateDimensions = false;
    for (const key of changedProps.keys()) {
      if (["w", "h", "minw", "maxw", "minh", "maxh"].includes(key)) {
        shouldUpdateDimensions = true;
        break;
      }
    }
    if (shouldUpdateDimensions) {
      this.setInstanceStyle("dimensions", selectorFactory(":host:host:host:host:host:host"), {
        "width": this.w,
        "height": this.h,
        "min-width": this.minw,
        "min-height": this.minh,
        "max-width": this.maxw,
        "max-height": this.maxh
      });
    }
  }
  async onDisabledChange() {
    if (this.hasUpdated && this.inputElement) {
      this.inputElement.disabled = this.disabled;
    } else {
      await this.updateComplete;
      if (this.inputElement) {
        this.inputElement.disabled = this.disabled;
      }
    }
  }
  handleDragOver(e) {
    e.preventDefault();
    if (this.disabled) {
      return;
    }
    this.isDraggingOver = true;
    this._onDragOver.emit(e);
  }
  handleDragEnter(e) {
    e.preventDefault();
    if (this.disabled) {
      return;
    }
    this._onDragEnter.emit(e);
  }
  handleDragLeave(e) {
    e.preventDefault();
    if (this.disabled) {
      return;
    }
    this.isDraggingOver = false;
    this._onDragLeave.emit(e);
  }
  handleDrop(e) {
    e.preventDefault();
    this.isDraggingOver = false;
    if (this.disabled || !e.dataTransfer.files) {
      return;
    }
    if (this.inputElement) {
      this.inputElement.addFiles(e.dataTransfer.files);
    }
    this._onDrop.emit(e);
  }
  render() {
    return html2`${this.instanceStyles}<slot></slot>`;
  }
};
MteFileUploadDropzone.styles = [styles2, styles4];
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "dropzoneHeight", 2);
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "minh", 2);
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "minw", 2);
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "w", 2);
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "h", 2);
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "maxw", 2);
__decorateClass([
  property2()
], MteFileUploadDropzone.prototype, "maxh", 2);
__decorateClass([
  property2({ reflect: true, type: Boolean })
], MteFileUploadDropzone.prototype, "isDraggingOver", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadDropzone.prototype, "_onDragStart", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadDropzone.prototype, "_onDragEnter", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadDropzone.prototype, "_onDragOver", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadDropzone.prototype, "_onDragLeave", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadDropzone.prototype, "_onDrop", 2);
__decorateClass([
  onUpdate("disabled")
], MteFileUploadDropzone.prototype, "onDisabledChange", 1);
MteFileUploadDropzone = __decorateClass([
  defineElement("mte-file-upload-dropzone")
], MteFileUploadDropzone);

// src/atomic/file-upload/file-upload-director.element.ts
import { html as html4 } from "lit";
import { property as property4 } from "lit/decorators.js";

// src/atomic/file-upload/file-upload-list.element.ts
import { html as html3 } from "lit";
import { property as property3 } from "lit/decorators.js";
import { classMap } from "lit-html/directives/class-map.js";

// src/atomic/file-upload/file-upload-list.styles.ts
import { css as css3 } from "lit";
var styles5 = css3`:host{--item-padding:var(--mte-space-sm) var(--mte-space-md);--list-gap:var(--mte-space-sm);--border-radius:var(--mte-border-radius-md);--background:var(--mte-surface-2);--border-color:var(--mte-border-2);--color:var(--mte-ink-1);--font-size:$var(--mte-font-set-body1-font-size) --font-weight:$var(--mte-font-set-body1-font-weight) --line-height:$var(--mte-font-set-body1-line-height)}:host .file-upload-list{display:flex;flex-direction:column;gap:var(--list-gap);list-style-type:none;margin:var(--mte-space-sm) 0;padding:0;width:100%}:host .file-upload-list-item{align-items:center;background:var(--background);border:1px solid var(--border-color);border-radius:var(--border-radius);color:var(--color);display:flex;font-size:var(--font-size);font-weight:var(--font-weight);justify-content:space-between;line-height:var(--line-height);margin:var(--item-margin) 0;min-height:34px;padding:var(--item-padding)}:host .file-upload-list-item.error{--border-color:rgb(var(--mte-status-danger-base-rgb))}:host .actions{align-items:center;display:flex}:host .file-name{align-items:center;display:flex}:host .loading{margin-right:var(--mte-space-sm)}:host .file-name .icon{margin-right:var(--mte-space-sm)}:host([radius=sm]){--border-radius:var(--mte-border-radius-md)}:host([radius=md]){--border-radius:var(--mte-border-radius-lg)}:host([withoutBorder]){border-color:transparent;border-width:0}`;

// src/atomic/file-upload/file-upload-list.element.ts
import {
  mtrIconClose,
  mtrIconDelete,
  mtrIconCheckCircle,
  mtrIconCloudArrowUpOutline
} from "@mortar/icons";
MteIconRegistryService.registerIcons([
  mtrIconClose,
  mtrIconDelete,
  mtrIconCheckCircle,
  mtrIconCloudArrowUpOutline
]);
var MteFileUploadList = class extends RadiusMixin(
  SizeMixin(StylePartsMixin(MteElement))
) {
  constructor() {
    super(...arguments);
    this.files = [];
    this.additionalFiles = [];
    this.deleteAriaLabel = "Delete";
    this.retryAriaLabel = "Retry uploading";
  }
  clearFiles() {
    this.files = [];
  }
  appendFile(file) {
    this.files = [...this.files, file];
  }
  replaceFiles(files) {
    this.files = files;
  }
  removeFile(id) {
    this.files = this.files.filter((file) => file._id !== id);
    this.additionalFiles = this.additionalFiles.filter((file) => file._id !== id && file.id !== id);
  }
  updateFile(updateFile) {
    this.files = this.files.map((file) => file._id === updateFile._id ? updateFile : file);
    this.additionalFiles = this.additionalFiles.map((file) => {
      if (file.id === updateFile.id || file._id === updateFile._id) {
        return updateFile;
      }
      return file;
    });
  }
  handleDelete(deleteFile) {
    this._onFilesDelete.emit({ files: [deleteFile] });
    this.files = this.files.map((file) => {
      if (file.id === deleteFile.id || file._id === deleteFile._id) {
        return { ...file, loading: true };
      }
      return file;
    });
  }
  handleRetry(retryFile) {
    this._onFilesRetry.emit({ files: [retryFile] });
    this.files = this.files.map((file) => {
      if (file.id === retryFile.id || file._id === retryFile._id) {
        return { ...file, loading: true };
      }
      return file;
    });
  }
  renderFile(file) {
    return html3`<li class="${classMap({ "file-upload-list-item": true, "error": !!file.error })}" part="item"><div><span class="file-name">${file.status === "uploaded" && !file.error ? html3`<mte-icon class="icon" name="check-circle" color="success"></mte-icon>` : null} ${file.status === "pending" && !file.error ? html3`<mte-icon class="icon" name="cloud-arrow-up-outline" muted></mte-icon>` : null} ${file.name} </span><span aria-live="polite">${file.error ? html3`<mte-error>${file.error.message}</mte-error>` : null}</span></div><div class="actions">${file.withRetry && !file.loading ? html3`<mte-icon-button part="retryButton" icon="reload" aria-label="${`${this.retryAriaLabel} ${file.name}`}" @click="${() => this.handleRetry(file)}"></mte-icon-button>` : null} ${file.withDelete && !file.loading ? html3`<mte-icon-button part="deleteButton" color="danger" icon="${file.withRetry ? "close" : "delete"}" aria-label="${`${this.deleteAriaLabel} ${file.name}`}" @click="${() => this.handleDelete(file)}"></mte-icon-button>` : null} ${file.loading ? html3`<mte-progress-spinner class="loading" diameter="${16}" indeterminate></mte-progress-spinner>` : null}</div></li>`;
  }
  render() {
    if (this.files.length === 0 && this.additionalFiles.length === 0) {
      return html3`${this.instanceStyles}`;
    }
    return html3`${this.instanceStyles}<ul class="file-upload-list" part="list">${this.additionalFiles.map((file) => this.renderFile(file))} ${this.files.map((file) => this.renderFile(file))}</ul>`;
  }
};
MteFileUploadList.styles = [styles2, styles5];
__decorateClass([
  property3({ attribute: true, type: Array })
], MteFileUploadList.prototype, "files", 2);
__decorateClass([
  property3({ attribute: true, type: Array })
], MteFileUploadList.prototype, "additionalFiles", 2);
__decorateClass([
  property3()
], MteFileUploadList.prototype, "deleteAriaLabel", 2);
__decorateClass([
  property3()
], MteFileUploadList.prototype, "retryAriaLabel", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadList.prototype, "_onFilesDelete", 2);
__decorateClass([
  eventEmitter()
], MteFileUploadList.prototype, "_onFilesRetry", 2);
MteFileUploadList = __decorateClass([
  defineElement("mte-file-upload-list")
], MteFileUploadList);

// src/atomic/file-upload/file-upload-director.element.ts
var MteFileUploadDirector = class extends MteElement {
  constructor() {
    super(...arguments);
    this.withFullWidth = false;
    this.withoutImmediateUpload = false;
    this._inputElement = null;
    this._listElement = null;
  }
  findElementInShadowDom(root, predicate) {
    if (root instanceof Element && predicate(root)) {
      return root;
    }
    const children = root instanceof Element && root.shadowRoot ? root.shadowRoot.childNodes : root.childNodes;
    for (const child of children) {
      const found = this.findElementInShadowDom(child, predicate);
      if (found)
        return found;
    }
    if (root instanceof HTMLSlotElement) {
      const assignedNodes = root.assignedNodes({ flatten: true });
      for (const node of assignedNodes) {
        const found = this.findElementInShadowDom(node, predicate);
        if (found)
          return found;
      }
    }
    return null;
  }
  // Usage: Start the search from the shadowRoot of the host element
  get inputElement() {
    if (this._inputElement) {
      return this._inputElement;
    }
    this._inputElement = this.findElementInShadowDom(
      this.shadowRoot,
      (element) => element instanceof MteFileUploadInput
    );
    return this._inputElement;
  }
  get fileListElement() {
    if (this._listElement) {
      return this._listElement;
    }
    this._listElement = this.findElementInShadowDom(
      this.shadowRoot,
      (element) => element instanceof MteFileUploadList
    );
    return this._listElement;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("onFilesAdd", (e) => {
      const { files } = e.detail;
      if (this.inputElement?.selectType === "replace" || !this.inputElement?.multiple) {
        this.fileListElement.clearFiles();
      }
      files.forEach((file) => {
        if (this.withoutImmediateUpload) {
          this.handleFileUploadSuccess(file);
          return;
        }
        this.uploadRequestor(
          file,
          (updatedFile) => this.handleFileUploadSuccess(updatedFile || file),
          (details = {
            message: "An unexpected error occurred"
          }) => this.handleFileUploadError(details, file)
        );
      });
    });
    this.addEventListener("onFilesDelete", (e) => {
      const { files } = e.detail;
      files.forEach((file) => {
        if (this.withoutImmediateUpload) {
          this.handleFileDeleteSuccess(file);
          return;
        }
        this.deleteRequestor(
          file,
          () => this.handleFileDeleteSuccess(file),
          (details = {
            message: "An unexpected error occurred"
          }) => this.handleFileDeleteError(details, file)
        );
      });
    });
    this.addEventListener("onFilesRetry", (e) => {
      const { files } = e.detail;
      files.forEach((file) => {
        this.uploadRequestor(
          file,
          (updatedFile) => this.handleFileUploadSuccess(updatedFile || file, true),
          (details) => this.handleFileUploadError(details, file, true)
        );
      });
    });
    this.updateComplete.then(() => {
      if (this.inputElement?.selectType !== "replace" && this.inputElement?.multiple) {
        this.inputElement.selectType = "append";
      }
    });
  }
  handleFileDeleteSuccess(file) {
    this.inputElement?.removeFile(file._id);
    this.fileListElement?.removeFile(file._id);
  }
  handleFileDeleteError(details, file) {
    this.fileListElement?.updateFile({
      ...file,
      status: "error",
      loading: false,
      error: {
        message: details.message || file.errorMessage
      }
    });
  }
  handleFileUploadSuccess(file, isRetry) {
    const { error, ...updatedFile } = file;
    if (isRetry) {
      this.fileListElement.updateFile({
        withDelete: this.withoutImmediateUpload || !!this.deleteRequestor,
        ...updatedFile,
        status: this.withoutImmediateUpload ? "pending" : "uploaded",
        withRetry: false,
        loading: false
      });
      return;
    }
    this.fileListElement?.appendFile({
      withDelete: this.withoutImmediateUpload || !!this.deleteRequestor,
      ...updatedFile,
      status: this.withoutImmediateUpload ? "pending" : "uploaded",
      loading: false
    });
  }
  handleFileUploadError(details, file, isRetry) {
    if (isRetry) {
      this.fileListElement?.updateFile({
        withDelete: this.withoutImmediateUpload || !!this.deleteRequestor,
        withRetry: true,
        ...file,
        loading: false,
        status: "error",
        error: {
          message: details.message
        }
      });
      return;
    }
    this.fileListElement?.appendFile({
      withDelete: this.withoutImmediateUpload || !!this.deleteRequestor,
      withRetry: true,
      ...file,
      loading: false,
      status: "error",
      error: {
        message: details.message
      }
    });
  }
  render() {
    return html4`<slot></slot>`;
  }
};
__decorateClass([
  property4({ attribute: false })
], MteFileUploadDirector.prototype, "uploadRequestor", 2);
__decorateClass([
  property4({ attribute: false })
], MteFileUploadDirector.prototype, "deleteRequestor", 2);
__decorateClass([
  property4({ type: Boolean })
], MteFileUploadDirector.prototype, "withFullWidth", 2);
__decorateClass([
  property4({ type: Boolean })
], MteFileUploadDirector.prototype, "withoutImmediateUpload", 2);
MteFileUploadDirector = __decorateClass([
  defineElement("mte-file-upload-director")
], MteFileUploadDirector);
export {
  MteFileUploadDirector,
  MteFileUploadDropzone,
  MteFileUploadInput,
  MteFileUploadList
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vc3JjL2F0b21pYy9maWxlLXVwbG9hZCIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLWlucHV0LnN0eWxlcy50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ZpbGUtdXBsb2FkIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQtZHJvcHpvbmUuc3R5bGVzLnRzIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQtZGlyZWN0b3IuZWxlbWVudC50cyIsICIuLi8uLi8uLi8uLi9zcmMvYXRvbWljL2ZpbGUtdXBsb2FkIiwgIi4uLy4uLy4uLy4uL3NyYy9hdG9taWMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQtbGlzdC5zdHlsZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdChbd2l0aG91dExhYmVsXSkgLmxhYmVsLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZX0udmlzdWFsbHktaGlkZGVuLDpob3N0KFt3aXRob3V0TGFiZWxdKSAubGFiZWx7aGVpZ2h0OjFweCFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O3dpZHRoOjFweCFpbXBvcnRhbnQ7Y2xpcDpyZWN0KDAgMCAwIDApIWltcG9ydGFudDtib3JkZXI6bm9uZSFpbXBvcnRhbnQ7Y2xpcC1wYXRoOmluc2V0KDUwJSkhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDt3aGl0ZS1zcGFjZTpub3dyYXAhaW1wb3J0YW50fWA7IiwgbnVsbCwgImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7ZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtYm9yZGVyLTIpOy0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCk7LS1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlcjoycHggZGFzaGVkIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzp2YXIoLS1tdGUtc3BhY2UteGwpO3RleHQtYWxpZ246Y2VudGVyfTpob3N0KFtpc0RyYWdnaW5nT3Zlcl0pey0tYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tdGUtYmx1ZS1saWdodGVyKTstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtZm9jdXMpfTpob3N0KDpmb2N1cy13aXRoaW46bm90KFtkaXNhYmxlZF0pKXstLWJvcmRlci1jb2xvcjp2YXIoLS1tdGUtZm9jdXMpfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpub3QtYWxsb3dlZH06aG9zdChbd2l0aEZ1bGxXaWR0aF0pe3dpZHRoOjEwMCV9YDsiLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBNdGVFbGVtZW50LCBkZWZpbmVFbGVtZW50LCBpc1NzciB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tICdsaXQvZGVjb3JhdG9ycy5qcyc7XG5pbXBvcnQgdHlwZSB7IE10ZUZpbGVVcGxvYWRGaWxlLCBNdGVGaWxlVXBsb2FkVXBsb2FkRXZlbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLWlucHV0LmVsZW1lbnQnO1xuaW1wb3J0IHsgTXRlRmlsZVVwbG9hZExpc3QgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLWxpc3QuZWxlbWVudCc7XG5pbXBvcnQgeyBNdGVGaWxlVXBsb2FkSW5wdXQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLWlucHV0LmVsZW1lbnQnO1xuXG5pbnRlcmZhY2UgTXRlRmlsZVVwbG9hZFJlcXVlc3RvckVycm9yRGV0YWlscyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxudHlwZSBNdGVGaWxlVXBsb2FkUmVxdWVzdG9yID0gKFxuICBmaWxlOiBNdGVGaWxlVXBsb2FkRmlsZSxcbiAgc3VjY2VzczogKGZpbGU/OiBNdGVGaWxlVXBsb2FkRmlsZSkgPT4gdm9pZCxcbiAgZXJyb3I6IChkZXRhaWxzOiBNdGVGaWxlVXBsb2FkUmVxdWVzdG9yRXJyb3JEZXRhaWxzKSA9PiB2b2lkXG4pID0+IHZvaWQ7XG5cbnR5cGUgTXRlRmlsZURlbGV0ZVJlcXVlc3RvciA9IChcbiAgZmlsZTogTXRlRmlsZVVwbG9hZEZpbGUsXG4gIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXG4gIGVycm9yOiAoZGV0YWlsczogTXRlRmlsZVVwbG9hZFJlcXVlc3RvckVycm9yRGV0YWlscykgPT4gdm9pZFxuKSA9PiB2b2lkO1xuXG4vKipcbiAqIEBzbG90IC0gRGVmYXVsdCBzbG90dGVkIGNvbnRlbnRcbiAqL1xuQGRlZmluZUVsZW1lbnQoJ210ZS1maWxlLXVwbG9hZC1kaXJlY3RvcicpXG5leHBvcnQgY2xhc3MgTXRlRmlsZVVwbG9hZERpcmVjdG9yIGV4dGVuZHMgTXRlRWxlbWVudCB7XG4gIC8qKiBSZXF1ZXN0b3IgZnVuY3Rpb24gdGhhdCBjb21tdW5pY2F0ZXMgc3VjY2VzcyBhbmQgZXJyb3IgY29uZGl0aW9ucyBmb3Igd2hlbiBhIGZpbGUgaXMgdXBsb2FkZWQuICovXG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgdXBsb2FkUmVxdWVzdG9yOiBNdGVGaWxlVXBsb2FkUmVxdWVzdG9yO1xuXG4gIC8qKiBSZXF1ZXN0b3IgZnVuY3Rpb24gdGhhdCBjb21tdW5pY2F0ZXMgc3VjY2VzcyBhbmQgZXJyb3IgY29uZGl0aW9ucyBmb3Igd2hlbiBhIGZpbGUgaXMgZGVsZXRlZC4gKi9cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBkZWxldGVSZXF1ZXN0b3I6IE10ZUZpbGVEZWxldGVSZXF1ZXN0b3I7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbXBvbmVudCdzIHNob3VsZCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBjb250YWluZXIgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSB3aXRoRnVsbFdpZHRoPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBEaXNhYmxlcyByZXF1ZXN0b3JzIGFuZCBleHBlY3RzIGZpbGVzIHRvIGJlIHVwbG9hZGVkIG9uIHN1Ym1pdC4gKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSB3aXRob3V0SW1tZWRpYXRlVXBsb2FkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2lucHV0RWxlbWVudDogbnVsbCB8IE10ZUZpbGVVcGxvYWRJbnB1dCA9IG51bGw7XG4gIHByaXZhdGUgX2xpc3RFbGVtZW50OiBudWxsIHwgTXRlRmlsZVVwbG9hZExpc3QgPSBudWxsO1xuXG4gIHByaXZhdGUgZmluZEVsZW1lbnRJblNoYWRvd0RvbShcbiAgICByb290OiBOb2RlLFxuICAgIHByZWRpY2F0ZTogKGVsZW1lbnQ6IEVsZW1lbnQpID0+IGJvb2xlYW5cbiAgKTogRWxlbWVudCB8IG51bGwge1xuICAgIGlmIChyb290IGluc3RhbmNlb2YgRWxlbWVudCAmJiBwcmVkaWNhdGUocm9vdCkpIHtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID1cbiAgICAgIHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHJvb3Quc2hhZG93Um9vdCA/IHJvb3Quc2hhZG93Um9vdC5jaGlsZE5vZGVzIDogcm9vdC5jaGlsZE5vZGVzO1xuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3QgZm91bmQgPSB0aGlzLmZpbmRFbGVtZW50SW5TaGFkb3dEb20oY2hpbGQsIHByZWRpY2F0ZSk7XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCkge1xuICAgICAgY29uc3QgYXNzaWduZWROb2RlcyA9IHJvb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYXNzaWduZWROb2Rlcykge1xuICAgICAgICBjb25zdCBmb3VuZCA9IHRoaXMuZmluZEVsZW1lbnRJblNoYWRvd0RvbShub2RlLCBwcmVkaWNhdGUpO1xuICAgICAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFVzYWdlOiBTdGFydCB0aGUgc2VhcmNoIGZyb20gdGhlIHNoYWRvd1Jvb3Qgb2YgdGhlIGhvc3QgZWxlbWVudFxuICBnZXQgaW5wdXRFbGVtZW50KCk6IE10ZUZpbGVVcGxvYWRJbnB1dCB7XG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQgPSB0aGlzLmZpbmRFbGVtZW50SW5TaGFkb3dEb20oXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QsXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudCBpbnN0YW5jZW9mIE10ZUZpbGVVcGxvYWRJbnB1dFxuICAgICkgYXMgTXRlRmlsZVVwbG9hZElucHV0O1xuXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudDtcbiAgfVxuXG4gIGdldCBmaWxlTGlzdEVsZW1lbnQoKTogTXRlRmlsZVVwbG9hZExpc3Qge1xuICAgIGlmICh0aGlzLl9saXN0RWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3RFbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RFbGVtZW50ID0gdGhpcy5maW5kRWxlbWVudEluU2hhZG93RG9tKFxuICAgICAgdGhpcy5zaGFkb3dSb290LFxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgaW5zdGFuY2VvZiBNdGVGaWxlVXBsb2FkTGlzdFxuICAgICkgYXMgTXRlRmlsZVVwbG9hZExpc3Q7XG5cbiAgICByZXR1cm4gdGhpcy5fbGlzdEVsZW1lbnQ7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignb25GaWxlc0FkZCcsIChlOiBDdXN0b21FdmVudDxNdGVGaWxlVXBsb2FkVXBsb2FkRXZlbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGZpbGVzIH0gPSBlLmRldGFpbDtcblxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Py5zZWxlY3RUeXBlID09PSAncmVwbGFjZScgfHwgIXRoaXMuaW5wdXRFbGVtZW50Py5tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmZpbGVMaXN0RWxlbWVudC5jbGVhckZpbGVzKCk7XG4gICAgICB9XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGU6IE10ZUZpbGVVcGxvYWRGaWxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRJbW1lZGlhdGVVcGxvYWQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVVcGxvYWRTdWNjZXNzKGZpbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBsb2FkUmVxdWVzdG9yKFxuICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgKHVwZGF0ZWRGaWxlOiBNdGVGaWxlVXBsb2FkRmlsZSkgPT4gdGhpcy5oYW5kbGVGaWxlVXBsb2FkU3VjY2Vzcyh1cGRhdGVkRmlsZSB8fCBmaWxlKSxcbiAgICAgICAgICAoXG4gICAgICAgICAgICBkZXRhaWxzOiBNdGVGaWxlVXBsb2FkUmVxdWVzdG9yRXJyb3JEZXRhaWxzID0ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSA9PiB0aGlzLmhhbmRsZUZpbGVVcGxvYWRFcnJvcihkZXRhaWxzLCBmaWxlKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ29uRmlsZXNEZWxldGUnLCAoZTogQ3VzdG9tRXZlbnQ8TXRlRmlsZVVwbG9hZFVwbG9hZEV2ZW50PikgPT4ge1xuICAgICAgY29uc3QgeyBmaWxlcyB9ID0gZS5kZXRhaWw7XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGU6IE10ZUZpbGVVcGxvYWRGaWxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLndpdGhvdXRJbW1lZGlhdGVVcGxvYWQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVEZWxldGVTdWNjZXNzKGZpbGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGV0ZVJlcXVlc3RvcihcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgICgpID0+IHRoaXMuaGFuZGxlRmlsZURlbGV0ZVN1Y2Nlc3MoZmlsZSksXG4gICAgICAgICAgKFxuICAgICAgICAgICAgZGV0YWlsczogTXRlRmlsZVVwbG9hZFJlcXVlc3RvckVycm9yRGV0YWlscyA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICkgPT4gdGhpcy5oYW5kbGVGaWxlRGVsZXRlRXJyb3IoZGV0YWlscywgZmlsZSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdvbkZpbGVzUmV0cnknLCAoZTogQ3VzdG9tRXZlbnQ8TXRlRmlsZVVwbG9hZFVwbG9hZEV2ZW50PikgPT4ge1xuICAgICAgY29uc3QgeyBmaWxlcyB9ID0gZS5kZXRhaWw7XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGU6IE10ZUZpbGVVcGxvYWRGaWxlKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUmVxdWVzdG9yKFxuICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgKHVwZGF0ZWRGaWxlOiBNdGVGaWxlVXBsb2FkRmlsZSkgPT5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZVVwbG9hZFN1Y2Nlc3ModXBkYXRlZEZpbGUgfHwgZmlsZSwgdHJ1ZSksXG4gICAgICAgICAgKGRldGFpbHM6IE10ZUZpbGVVcGxvYWRSZXF1ZXN0b3JFcnJvckRldGFpbHMpID0+XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVVcGxvYWRFcnJvcihkZXRhaWxzLCBmaWxlLCB0cnVlKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Py5zZWxlY3RUeXBlICE9PSAncmVwbGFjZScgJiYgdGhpcy5pbnB1dEVsZW1lbnQ/Lm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdFR5cGUgPSAnYXBwZW5kJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmlsZURlbGV0ZVN1Y2Nlc3MoZmlsZTogTXRlRmlsZVVwbG9hZEZpbGUpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudD8ucmVtb3ZlRmlsZShmaWxlLl9pZCk7XG4gICAgdGhpcy5maWxlTGlzdEVsZW1lbnQ/LnJlbW92ZUZpbGUoZmlsZS5faWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWxlRGVsZXRlRXJyb3IoZGV0YWlsczogTXRlRmlsZVVwbG9hZFJlcXVlc3RvckVycm9yRGV0YWlscywgZmlsZSkge1xuICAgIHRoaXMuZmlsZUxpc3RFbGVtZW50Py51cGRhdGVGaWxlKHtcbiAgICAgIC4uLmZpbGUsXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IGRldGFpbHMubWVzc2FnZSB8fCBmaWxlLmVycm9yTWVzc2FnZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVVcGxvYWRTdWNjZXNzKGZpbGU6IE10ZUZpbGVVcGxvYWRGaWxlLCBpc1JldHJ5PzogYm9vbGVhbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCB7IGVycm9yLCAuLi51cGRhdGVkRmlsZSB9ID0gZmlsZTtcbiAgICBpZiAoaXNSZXRyeSkge1xuICAgICAgdGhpcy5maWxlTGlzdEVsZW1lbnQudXBkYXRlRmlsZSh7XG4gICAgICAgIHdpdGhEZWxldGU6IHRoaXMud2l0aG91dEltbWVkaWF0ZVVwbG9hZCB8fCAhIXRoaXMuZGVsZXRlUmVxdWVzdG9yLFxuICAgICAgICAuLi51cGRhdGVkRmlsZSxcbiAgICAgICAgc3RhdHVzOiB0aGlzLndpdGhvdXRJbW1lZGlhdGVVcGxvYWQgPyAncGVuZGluZycgOiAndXBsb2FkZWQnLFxuICAgICAgICB3aXRoUmV0cnk6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZUxpc3RFbGVtZW50Py5hcHBlbmRGaWxlKHtcbiAgICAgIHdpdGhEZWxldGU6IHRoaXMud2l0aG91dEltbWVkaWF0ZVVwbG9hZCB8fCAhIXRoaXMuZGVsZXRlUmVxdWVzdG9yLFxuICAgICAgLi4udXBkYXRlZEZpbGUsXG4gICAgICBzdGF0dXM6IHRoaXMud2l0aG91dEltbWVkaWF0ZVVwbG9hZCA/ICdwZW5kaW5nJyA6ICd1cGxvYWRlZCcsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmlsZVVwbG9hZEVycm9yKFxuICAgIGRldGFpbHM6IE10ZUZpbGVVcGxvYWRSZXF1ZXN0b3JFcnJvckRldGFpbHMsXG4gICAgZmlsZTogTXRlRmlsZVVwbG9hZEZpbGUsXG4gICAgaXNSZXRyeT86IGJvb2xlYW5cbiAgKSB7XG4gICAgaWYgKGlzUmV0cnkpIHtcbiAgICAgIHRoaXMuZmlsZUxpc3RFbGVtZW50Py51cGRhdGVGaWxlKHtcbiAgICAgICAgd2l0aERlbGV0ZTogdGhpcy53aXRob3V0SW1tZWRpYXRlVXBsb2FkIHx8ICEhdGhpcy5kZWxldGVSZXF1ZXN0b3IsXG4gICAgICAgIHdpdGhSZXRyeTogdHJ1ZSxcbiAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiBkZXRhaWxzLm1lc3NhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGVMaXN0RWxlbWVudD8uYXBwZW5kRmlsZSh7XG4gICAgICB3aXRoRGVsZXRlOiB0aGlzLndpdGhvdXRJbW1lZGlhdGVVcGxvYWQgfHwgISF0aGlzLmRlbGV0ZVJlcXVlc3RvcixcbiAgICAgIHdpdGhSZXRyeTogdHJ1ZSxcbiAgICAgIC4uLmZpbGUsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IGRldGFpbHMubWVzc2FnZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNsb3Q+PC9zbG90PmA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXRlLWZpbGUtdXBsb2FkLWRpcmVjdG9yJzogTXRlRmlsZVVwbG9hZERpcmVjdG9yO1xuICB9XG59XG4iLCBudWxsLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztleHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYDpob3N0ey0taXRlbS1wYWRkaW5nOnZhcigtLW10ZS1zcGFjZS1zbSkgdmFyKC0tbXRlLXNwYWNlLW1kKTstLWxpc3QtZ2FwOnZhcigtLW10ZS1zcGFjZS1zbSk7LS1ib3JkZXItcmFkaXVzOnZhcigtLW10ZS1ib3JkZXItcmFkaXVzLW1kKTstLWJhY2tncm91bmQ6dmFyKC0tbXRlLXN1cmZhY2UtMik7LS1ib3JkZXItY29sb3I6dmFyKC0tbXRlLWJvcmRlci0yKTstLWNvbG9yOnZhcigtLW10ZS1pbmstMSk7LS1mb250LXNpemU6JHZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXNpemUpIC0tZm9udC13ZWlnaHQ6JHZhcigtLW10ZS1mb250LXNldC1ib2R5MS1mb250LXdlaWdodCkgLS1saW5lLWhlaWdodDokdmFyKC0tbXRlLWZvbnQtc2V0LWJvZHkxLWxpbmUtaGVpZ2h0KX06aG9zdCAuZmlsZS11cGxvYWQtbGlzdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDp2YXIoLS1saXN0LWdhcCk7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luOnZhcigtLW10ZS1zcGFjZS1zbSkgMDtwYWRkaW5nOjA7d2lkdGg6MTAwJX06aG9zdCAuZmlsZS11cGxvYWQtbGlzdC1pdGVte2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2JvcmRlcjoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2NvbG9yOnZhcigtLWNvbG9yKTtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tZm9udC13ZWlnaHQpO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2xpbmUtaGVpZ2h0OnZhcigtLWxpbmUtaGVpZ2h0KTttYXJnaW46dmFyKC0taXRlbS1tYXJnaW4pIDA7bWluLWhlaWdodDozNHB4O3BhZGRpbmc6dmFyKC0taXRlbS1wYWRkaW5nKX06aG9zdCAuZmlsZS11cGxvYWQtbGlzdC1pdGVtLmVycm9yey0tYm9yZGVyLWNvbG9yOnJnYih2YXIoLS1tdGUtc3RhdHVzLWRhbmdlci1iYXNlLXJnYikpfTpob3N0IC5hY3Rpb25ze2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXh9Omhvc3QgLmZpbGUtbmFtZXthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4fTpob3N0IC5sb2FkaW5ne21hcmdpbi1yaWdodDp2YXIoLS1tdGUtc3BhY2Utc20pfTpob3N0IC5maWxlLW5hbWUgLmljb257bWFyZ2luLXJpZ2h0OnZhcigtLW10ZS1zcGFjZS1zbSl9Omhvc3QoW3JhZGl1cz1zbV0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1tZCl9Omhvc3QoW3JhZGl1cz1tZF0pey0tYm9yZGVyLXJhZGl1czp2YXIoLS1tdGUtYm9yZGVyLXJhZGl1cy1sZyl9Omhvc3QoW3dpdGhvdXRCb3JkZXJdKXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXdpZHRoOjB9YDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVSxhQUFhOzs7QUNEaEMsU0FBUyxXQUFXO0FBQWEsSUFBTUEsVUFBUzs7O0FEeUJoRCxTQUFTLGtCQUFrQix5QkFBeUI7QUFNcEQsU0FBUyxpQkFBaUI7QUFnRDFCLElBQUksa0JBQWtCO0FBa0JmLElBQU0scUJBQU4sY0FBaUM7RUFDdEM7SUFDRTtNQUNFO1FBQ0U7VUFDRTtZQUNFO2NBQ0UsZ0JBQTRELFVBQVU7WUFDeEU7VUFDRjtRQUNGO01B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WSxLQUFLLDBCQUEwQixDQUFDLENBQUMsS0FBSztBQUFBLFFBQ2xELFdBQVc7QUFBQSxRQUNYLEdBQUc7QUFBQSxRQUNILFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxVQUNMLFNBQVMsUUFBUTtBQUFBLFFBQ25CO0FBQUEsTUFDRixDQUFDO0FBQ0Q7QUFBQSxJQUNGO0FBRUEsU0FBSyxpQkFBaUIsV0FBVztBQUFBLE1BQy9CLFlBQVksS0FBSywwQkFBMEIsQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNsRCxXQUFXO0FBQUEsTUFDWCxHQUFHO0FBQUEsTUFDSCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsUUFDTCxTQUFTLFFBQVE7QUFBQSxNQUNuQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVBLFNBQVM7QUFDUCxXQUFPQztBQUFBLEVBQ1Q7QUFDRjtBQWhOa0M7QUFBQSxFQUEvQkMsVUFBUyxFQUFFLFdBQVcsTUFBTSxDQUFDO0FBQUEsR0FGbkIsc0JBRXFCO0FBR0E7QUFBQSxFQUEvQkEsVUFBUyxFQUFFLFdBQVcsTUFBTSxDQUFDO0FBQUEsR0FMbkIsc0JBS3FCO0FBR0g7QUFBQSxFQUE1QkEsVUFBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQUEsR0FSaEIsc0JBUWtCO0FBR0E7QUFBQSxFQUE1QkEsVUFBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQUEsR0FYaEIsc0JBV2tCO0FBWGxCLHdCQUFOO0FBQUEsRUFETixjQUFjLDBCQUEwQjtBQUFBLEdBQzVCOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAic3R5bGVzIiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInByb3BlcnR5IiwgImh0bWwiLCAicHJvcGVydHkiLCAiY3NzIiwgInN0eWxlcyIsICJodG1sIiwgInN0eWxlcyIsICJwcm9wZXJ0eSIsICJodG1sIiwgInByb3BlcnR5Il0KfQo=
