/*!
 * Chai ForOne keybaord v1.0
 * https://caixnet.github.io
 * Copyright (c) Cai guangxian
 * Author: Daway.Cai guangxian
 * Email: caixnet@outlook.com
 * Application number: 2014800745031
 * International Application : PCT/CN2014/092045, 
 * International Publication : WO2016/082081
 * Date: 2018-01-02
 */
/*! *****************************************************************************
Copyright (c) Daway.Cai . All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//
// chai forone CHS (CSS+HTML+JavaScript render)
//
//'use strict';

    /* begin CSS+HTTP+JS render */
    triaCHS = {
        // forone render
        chaiHTMLzone: "chaiHTMLzone",
        chaiHTMLlabel: "chaiHTMLlabel",
        chaiHTMLtext: "chaiHTMLtext",
        chaiCSSzone: "chaiCSSzone",
        chaiCSSlabel: "chaiCSSlabel",
        chaiCSStext: "chaiCSStext",
        chaiJSzone: "chaiJSzone",
        chaiJSlabel: "chaiJSlabel",
        chaiJStext: "chaiJStext",
        chaiRDzone: "chaiRDzone",
        chaiFRMlabel: "chaiFRMlabel",
        chaiFRMtext: "chaiFRMtext",
        idHTMLzone: null,
        idHTMLtext: null,
        idCSSzone: null,
        idCSStext: null,
        idJSzone: null,
        idJStext: null,
        idRDzone: null,
        idRDtext: null,
        idRDdoc: null,
        //idIFRMfile: null,
        oldHTML: "",
        newHTML: "",
        oldCSS: "",
        newCSS: "",
        oldJS: "",
        newJS: "",

        idRenders: [],
        htmlFRMInit: function () {
            forone.htmlBase = '<!DOCTYPE>\n<html>\n<head><meta charset="UTF-8">\n' +
                '<style>\n</style>\n</head>\n <script>\n</script>\n<body>\n' +
                '</body>\n</html>';
        },
        //
        textHTML: function () {
            return forone.triaCHS.idHTMLtext.value;
        },
        textCSS: function () {
            return forone.triaCHS.idCSStext.value;
        },
        textJS: function () {
            return forone.triaCHS.idJStext.value;
        },
        //
        renderFile: function () {
            try {
                source = forone.triaCHS.idRDdoc.documentElement.outerHTML;
                forone.idRDdoc = iframe_doc.replace(forone.re.cursorI, '');
                // iframe_doc = iframe_doc.replace(/Î/g, '');
                forone.triaCHS.idRDdoc.open();
                forone.triaCHS.idRDdoc.write(source);
                forone.triaCHS.idRDdoc.close();
                forone.logc(source, "renderFile-src-OK");
            } catch (error) {
                forone.logc(error, "renderFile");
                forone.logc(source, "renderFile-src-err");
            }
        },
        //
        render: function () {
            try {
                forone.triaCHS.newHTML = forone.triaCHS.textHTML();
                forone.triaCHS.newCSS = forone.triaCHS.textCSS();
                forone.triaCHS.newJS = forone.triaCHS.textJS();
                forone.triaCHS.idRDdoc.head.querySelector("style").innerHTML = forone.triaCHS.newCSS;

                forone.triaCHS.idRDdoc.head.querySelector("script").innerHTML = forone.triaCHS.newJS;
                forone.triaCHS.idRDdoc.body.innerHTML = forone.triaCHS.newHTML;

                forone.triaCHS.renderFile();
            } catch (error) {
                forone.findResource();
                forone.logc(error, "try");
            }


        },
        //
        initRender: function () {

            //forone.myRequire("demo2.js");
            try {
                forone.include("demo2.js");
                forone.isRender = forone.getId(forone.triaCHS.chaiHTMLtext) ? true : false;
                if (forone.isRender) {
                    forone.triaCHS.idHTMLzone = forone.getId(forone.triaCHS.chaiHTMLzone);
                    forone.triaCHS.idHTMLtext = forone.getId(forone.triaCHS.chaiHTMLtext);
                    forone.triaCHS.idCSSzone = forone.getId(forone.triaCHS.chaiCSSzone);
                    forone.triaCHS.idCSStext = forone.getId(forone.triaCHS.chaiCSStext);
                    forone.triaCHS.idJSzone = forone.getId(forone.triaCHS.chaiJSzone);
                    forone.triaCHS.idJStext = forone.getId(forone.triaCHS.chaiJStext);
                    forone.triaCHS.idRDzone = forone.getId(forone.triaCHS.chaiRDzone);
                    forone.triaCHS.idRDtext = forone.getId(forone.triaCHS.chaiFRMtext);
                    forone.triaCHS.idRDdoc = forone.triaCHS.idRDtext.contentDocument ||
                        forone.triaCHS.idRDtext.contentDocument.document ||
                        forone.triaCHS.idRDtext.contentWindow;
                    forone.idRenders = [forone.triaCHS.idHTMLtext, forone.triaCHS.idCSStext, forone.triaCHS.idJStext];
                    forone.idRenders.forEach(function (mRender, index, array) {
                        mRender.addEventListener('oninput', function () {
                            // mRender.addEventListener('onchange', function () {
                            forone.triaCHS.render();
                        }, false);
                    });
                    //forone.htmlFRMInit();
                }
            } catch (error) { forone.logc(error); }
        }
    }
    /* end CSS+HTTP+JS render */

