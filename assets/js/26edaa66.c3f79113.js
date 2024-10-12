"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1324],{44967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=n(85893),s=n(11151);const a={},r="build method",d={id:"talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/build.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen",slug:"/talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/build",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"chat_list_screen library",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_chat_chat_list_screen/views_after_auth_screens_chat_chat_list_screen-library"},next:{title:"chatId property",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/chatId"}},l={},h=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,i.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,i.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,i.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,i.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,i.jsxs)("p",{children:["The given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,i.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,i.jsxs)("li",{children:["any ambient state obtained from the ",(0,i.jsx)("code",{children:"context"})," using\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,i.jsxs)("p",{children:["If a widget's ",(0,i.jsx)("a",{href:"../../views_after_auth_screens_chat_chat_message_screen/ChatMessageScreen/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,i.jsx)("p",{children:"See also:"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  model.getChatMessages(chatId);\n  model.chatName(chatId);\n  return Scaffold(\n    appBar: AppBar(\n      automaticallyImplyLeading: false,\n      title: Row(\n        children: [\n          IconButton(\n            icon: const Icon(Icons.arrow_back),\n            onPressed: () => Navigator.pop(context),\n          ),\n          SizedBox(width: SizeConfig.safeBlockHorizontal! * 3),\n          CircleAvatar(\n            backgroundColor: Colors.white,\n            radius: SizeConfig.blockSizeVertical! * 2.3,\n          ),\n          SizedBox(width: SizeConfig.safeBlockHorizontal! * 3),\n          Text('${model.name}'),\n        ],\n      ),\n    ),\n    body: BaseView<DirectChatViewModel>(\n      onModelReady: (model) => model.getChatMessages(chatId),\n      builder: (context, model, child) =>\n          (Provider.of<DirectChatViewModel>(context).chatState ==\n                  ChatState.complete)\n              ? Column(\n                  children: [\n                    Expanded(\n                      child: Padding(\n                        padding: EdgeInsets.symmetric(\n                          horizontal: SizeConfig.safeBlockHorizontal! * 3,\n                        ),\n                        child: ListView.builder(\n                          itemCount: model.chatMessagesByUser[chatId]!.length,\n                          itemBuilder: (context, index) {\n                            return Message(\n                              message:\n                                  model.chatMessagesByUser[chatId]![index],\n                            );\n                          },\n                        ),\n                      ),\n                    ),\n                    ChatInputField(chatId: chatId, model: model),\n                  ],\n                )\n              : const Center(\n                  child: CircularProgressIndicator(),\n                ),\n    ),\n  );\n}\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);