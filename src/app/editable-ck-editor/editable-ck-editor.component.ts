import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';

@Component({
  selector: 'app-editable-ck-editor',
  templateUrl: './editable-ck-editor.component.html',
  styleUrls: ['./editable-ck-editor.component.scss']
})
export class EditableCkEditorComponent implements OnInit {
  @Input() placeholderTypes: any;

  EditorData = ""
  public Editor = ClassicEditor;
  config;
  imageUploadConfig = {
    types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg+xml']
  };
  constructor() { }

  ngOnInit(): void {
    this.config = {
      htmlAllowedTags: ['.*'],
      htmlAllowedAttrs: ['.*'],
      placeholder: 'Type the content here!',
      // fullPage: true,
      // allowedContent:true,
      toolbar: {
        items: [
          'undo',
          'redo',
          '|',
          'heading',
          'style',
          // 'textPartLanguage',
          '|',
          'code',
          'codeBlock',
          'htmlEmbed',
          'subscript',
          'superscript',
          // 'strikethrough',
          // 'restrictedEditingException',
          // '|',
          'outdent',
          'indent',
          'alignment',
          '|',
          'insertTable',
          'imageInsert',
          // 'mediaEmbed',
          '|',
          'bulletedList',
          'numberedList',
          'todoList',
          '|',
          '-',
          'bold',
          'italic',
          'underline',
          'removeFormat',
          'specialCharacters',
          'fontColor',
          'fontSize',
          'fontFamily',
          'fontBackgroundColor',
          'highlight',
          'horizontalLine',
          'blockQuote',
          'pageBreak',
          'link',
          'placeholder',
          '|', 'sourceEditing',
          // 'insertNewsLetter'
        ],
        shouldNotGroupWhenFull: true
      },
      style: {
        definitions: [
          {
            name: 'Article category',
            element: 'h3',
            classes: ['category']
          },
          {
            name: 'Info box',
            element: 'p',
            classes: ['info-box']
          },
          {
            name: 'Background',
            element: 'p',
            classes: ['background']
          },
          {
            name: 'Code (dark)',
            element: 'pre',
            classes: ['fancy-code', 'fancy-code-dark']
          },
          {
            name: 'Code (bright)',
            element: 'pre',
            classes: ['fancy-code', 'fancy-code-bright']
          }
        ]
      },
      placeholderConfig: {
        types: ['date', 'color', 'first name', 'surname']
      },
      language: 'en',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:inline',
          'imageStyle:block',
          'imageStyle:side',
          'linkImage'
        ],
        upload: this.imageUploadConfig,
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties'
        ]
      },
      htmlSupport: {
        allow: [
          {
            name: /.*/,
            attributes: true,
            classes: true,
            styles: true
          }
        ]
      },
      htmlEmbed: {
        showPreviews: true,
        // sanitizeHtml( inputHtml ) {
        //     // Strip unsafe elements and attributes, e.g.:
        //     // the `<script>` elements and `on*` attributes.
        //     const outputHtml = sanitize( inputHtml );

        //     return {
        //         html: outputHtml,
        //         // true or false depending on whether the sanitizer stripped anything.
        //         // hasChanged: ...
        //     };
        // },
      }
      // ckbox: {
      // 	defaultUploadCategories: {
      // 		Bitmaps: [ 'bmp' ],
      // 		Pictures: [ 'jpg', 'jpeg' ],
      // 		Scans: [ 'png', 'tiff' ],
      // 		// The category below is referenced by its ID.
      // 		'fdf2a647-b67f-4a6c-b692-5ba1dc1ed87b': [ 'gif' ]
      // 	}
      // }
    };

    // this.config = {
    //   ...ClassicEditor.defaultConfig,
    //   placeholderConfig: {
    //     types: this.placeholderTypes
    //   },
    // };
    this.Editor.defaultConfig = this.config;

  }
}
