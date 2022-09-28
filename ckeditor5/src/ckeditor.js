/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
import DataSchema from '@ckeditor/ckeditor5-html-support/src/dataschema.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Style from '@ckeditor/ckeditor5-style/src/style.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { toWidget, viewToModelPositionOutsideModelElement } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import Command from '@ckeditor/ckeditor5-core/src/command';

import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import HtmlComment from '@ckeditor/ckeditor5-html-support/src/htmlcomment';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

let isDirty = false;

class Placeholder extends Plugin {
    static get requires() {
        return [PlaceholderEditing, PlaceholderUI];
    }
}
class PlaceholderCommand extends Command {
    execute({ value }) {
        const editor = this.editor;
        const selection = editor.model.document.selection;

        editor.model.change(writer => {
            // Create a <placeholder> element with the "name" attribute (and all the selection attributes)...
            const placeholder = writer.createElement('placeholder', {
                ...Object.fromEntries(selection.getAttributes()),
                name: value
            });

            // ... and insert it into the document.
            editor.model.insertContent(placeholder);

            // Put the selection on the inserted element.
            writer.setSelection(placeholder, 'on');
        });
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;

        const isAllowed = model.schema.checkChild(selection.focus.parent, 'placeholder');

        this.isEnabled = isAllowed;
    }
}
class PlaceholderUI extends Plugin {
    init() {
        const editor = this.editor;
        const t = editor.t;
        const placeholderNames = editor.config.get('placeholderConfig.types');

        // The "placeholder" dropdown must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add('placeholder', locale => {
            const dropdownView = createDropdown(locale);

            // Populate the list in the dropdown with items.
            addListToDropdown(dropdownView, getDropdownItemsDefinitions(placeholderNames));

            dropdownView.buttonView.set({
                // The t() function helps localize the editor. All strings enclosed in t() can be
                // translated and change when the language of the editor changes.
                label: t('Placeholder'),
                tooltip: true,
                withText: true
            });

            // Disable the placeholder button when the command is disabled.
            const command = editor.commands.get('placeholder');
            dropdownView.bind('isEnabled').to(command);

            // Execute the command when the dropdown item is clicked (executed).
            this.listenTo(dropdownView, 'execute', evt => {
                editor.execute('placeholder', { value: evt.source.commandParam });
                editor.editing.view.focus();
            });

            return dropdownView;
        });
    }
}
class PlaceholderEditing extends Plugin {
    static get requires() {
        return [Widget];
    }

    init() {
        console.log('PlaceholderEditing#init() got called');

        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('placeholder', new PlaceholderCommand(this.editor));

        this.editor.editing.mapper.on(
            'viewToModelPosition',
            viewToModelPositionOutsideModelElement(this.editor.model, viewElement => viewElement.hasClass('placeholder'))
        );
        this.editor.config.define('placeholderConfig', {
            types: ['date', 'first name', 'surname']
        });
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('placeholder', {
            // Allow wherever text is allowed:
            allowWhere: '$text',

            // The placeholder will act as an inline node:
            isInline: true,

            // The inline widget is self-contained so it cannot be split by the caret and it can be selected:
            isObject: true,

            // The inline widget can have the same attributes as text (for example linkHref, bold).
            allowAttributesOf: '$text',

            // The placeholder can have many types, like date, name, surname, etc:
            allowAttributes: ['name']
        });
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement({
            view: {
                name: 'span',
                classes: ['placeholder']
            },
            model: (viewElement, { writer: modelWriter }) => {
                // Extract the "name" from "{name}".
                const name = viewElement.getChild(0).data.slice(1, -1);

                return modelWriter.createElement('placeholder', { name });
            }
        });

        conversion.for('editingDowncast').elementToElement({
            model: 'placeholder',
            view: (modelItem, { writer: viewWriter }) => {
                const widgetElement = createPlaceholderView(modelItem, viewWriter);

                // Enable widget handling on a placeholder element inside the editing view.
                return toWidget(widgetElement, viewWriter);
            }
        });

        conversion.for('dataDowncast').elementToElement({
            model: 'placeholder',
            view: (modelItem, { writer: viewWriter }) => createPlaceholderView(modelItem, viewWriter)
        });

        // Helper method for both downcast converters.
        function createPlaceholderView(modelItem, viewWriter) {
            const name = modelItem.getAttribute('name');

            const placeholderView = viewWriter.createContainerElement('span', {
                class: 'placeholder'
            });

            // Insert the placeholder name (as a text).
            const innerText = viewWriter.createText('{' + name + '}');
            viewWriter.insert(viewWriter.createPositionAt(placeholderView, 0), innerText);

            return placeholderView;
        }
    }
}
function getDropdownItemsDefinitions(placeholderNames) {
    const itemDefinitions = new Collection();

    for (const name of placeholderNames) {
        const definition = {
            type: 'button',
            model: new Model({
                commandParam: name,
                label: name,
                withText: true
            })
        };

        // Add the item definition to the collection.
        itemDefinitions.add(definition);
    }

    return itemDefinitions;
}
//---------------------------------------------------------------
class NewsLetter extends Plugin {
    static get requires() {
        return [NewsLetterEditing, NewsLetterUI];
    }
}
class NewsLetterUI extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('insertNewsLetter', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'My news letter form',
                icon: imageIcon,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
               // const promptedListName = prompt(dashBoard.localizer.get('View.Admin.Newsletter.PleaseProvideListName'));

                editor.model.change(writer => {
                    const newsLetter = writer.createElement('html');
             
                    const newsLetterEmail = writer.createElement('head');
                    const body = writer.createElement('body');

                    writer.append(newsLetterEmail, newsLetter);
                    writer.append(body, newsLetter);

                    editor.model.insertContent(newsLetter, editor.model.document.selection);
                });
            });

            return view;
        });
        console.log('NewsLetterUI#init() got called');
    }
}
class NewsLetterEditing extends Plugin {
    init() {
        console.log('NewsLetterEditing#init() got called');

        this._defineSchema();
        this._defineConverters();
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('html', {
            // Behaves like a self-contained object (e.g. an image).
            isObject: false,
            // Allow in places where other blocks are allowed (e.g. directly in the root).
            allowWhere: '$block',
            isSelectable: true,
        });
        schema.register('head', {
            isObject: true,
            allowIn: 'html',
            allowContentOf: '$block'
        });
        schema.register('body', {
            isObject: true,
            allowIn: 'html',
            allowContentOf: '$block'
        });
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.elementToElement({
            model: 'html',
            view: {
                name: 'html'
            }
        });
        conversion.elementToElement( {
            model: 'head',
            view: {
                name: 'head'
            }
        });
        conversion.elementToElement( {
            model: 'body',
            view: {
                name: 'body'
            }
        });

        // conversion.attributeToAttribute({ model: 'inputValue', view: 'value' });
    }
}
class Timestamp extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('timestamp', () => {
            // The button will be an instance of ButtonView.
            const button = new ButtonView();

            button.set({
                label: 'Timestamp',
                withText: true
            });

            //Execute a callback function when the button is clicked
            button.on('execute', () => {
                const now = new Date();
                console.log(editor.model.document);


                editor.model.change(writer => {
                    writer.insertText('Plain text', editor.model.document.selection.getFirstPosition());
                });

                //Change the model using the model writer
                editor.model.change(writer => {

                    //Insert the text at the user's current position
                    editor.model.insertContent(writer.createElement(now.toString()));
                });
            });

            return button;
        });
    }
}
class MyUploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        return this.loader.file
            .then(file => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            }));
    }

    // Aborts the upload process.
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    // Initializes the XMLHttpRequest object using the URL passed to the constructor.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        // Note that your request may look different. It is up to you and your editor
        // integration to choose the right communication channel. This example uses
        // a POST request with JSON as a data structure but your configuration
        // could be different.
        xhr.open('POST', 'http://example.com/image/upload/path', true);
        xhr.responseType = 'json';
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;

            // This example assumes the XHR server's "response" object will come with
            // an "error" which has its own "message" that can be passed to reject()
            // in the upload promise.
            //
            // Your integration may handle upload errors in a different way so make sure
            // it is done properly. The reject() function must be called when the upload fails.
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }

            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            // This URL will be used to display the image in the content. Learn more in the
            // UploadAdapter#upload documentation.
            resolve({
                default: response.url
            });
        });

        // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded
        // properties which are used e.g. to display the upload progress bar in the editor
        // user interface.
        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    // Prepares the data and sends the request.
    _sendRequest(file) {
        // Prepare the form data.
        const data = new FormData();

        data.append('upload', file);

        // Important note: This is the right place to implement security mechanisms
        // like authentication and CSRF protection. For instance, you can use
        // XMLHttpRequest.setRequestHeader() to set the request headers containing
        // the CSRF token generated earlier by your application.

        // Send the request.
        this.xhr.send(data);
    }
}
function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}

/**
 * A plugin extending General HTML Support for example custom HTML elements.
 */
class ExtendHTMLSupport extends Plugin {
    static get requires() {
        return [GeneralHtmlSupport];
    }

    init() {
        // Extend schema with custom HTML elements.
        const dataFilter = this.editor.plugins.get('DataFilter');
        const dataSchema = this.editor.plugins.get('DataSchema');

        // Inline element
        dataSchema.registerInlineElement({
            view: 'element-inline',
            model: 'myElementInline'
        });

        // Custom elements need to be registered using direct API instead of config.
        dataFilter.allowElement('element-inline');
        dataFilter.allowAttributes({ name: 'element-inline', attributes: { 'data-foo': false }, classes: ['foo'] });

        // Block element
        dataSchema.registerBlockElement({
            view: 'element-block',
            model: 'myElementBlock',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        });

        dataFilter.allowElement('element-block');
    }
}

class Editor extends ClassicEditor { }
// Plugins to include in the build.
Editor.builtinPlugins = [
    Alignment,
    Autoformat,
    AutoImage,
    Autosave,
    BlockQuote,
    Bold,
    CloudServices,
    Code,
    CodeBlock,
    DataFilter,
    DataSchema,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlEmbed,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    // Markdown,
    MediaEmbed,
    MediaEmbedToolbar,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SimpleUploadAdapter,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    StandardEditingMode,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TextTransformation,
    TodoList,
    Underline,
    WordCount,
    Timestamp,
    Placeholder,
    SourceEditing,
    HtmlComment,
    Base64UploadAdapter,
    PendingActions,
    NewsLetter
];
const imageUploadConfig = {
    types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'svg+xml']
};
// Editor configuration.
Editor.defaultConfig = {
    placeholder: 'Type the content here!',
    fullPage: true,
    allowedContent:true,
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
            // 'subscript',
            // 'superscript',
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
        upload: imageUploadConfig,
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

export default Editor;
