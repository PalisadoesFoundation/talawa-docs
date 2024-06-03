"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[47051],{74959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=n(85893),s=n(11151);const o={},l="build method",d={id:"talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build.md",sourceDirName:"talawa-mobile-docs/widgets_custom_list_tile/CustomListTile",slug:"/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build",permalink:"/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"CustomListTile constructor",permalink:"/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/"},next:{title:"index property",permalink:"/docs/talawa-mobile-docs/widgets_custom_list_tile/CustomListTile/"}},r={},a=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"build-method",children:"build method"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,i.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,i.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,i.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,i.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,i.jsxs)("p",{children:["The given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,i.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,i.jsxs)("li",{children:["any ambient state obtained from the ",(0,i.jsx)("code",{children:"context"})," using\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,i.jsxs)("p",{children:["If a widget's ",(0,i.jsx)("a",{href:"../../widgets_custom_list_tile/CustomListTile/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,i.jsx)("p",{children:"See also:"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  return InkWell(\n    // checking wheather the tapped tile is of user or org.\n    onTap: () => type == TileType.org\n        ? onTapOrgInfo!(orgInfo!)\n        : type == TileType.user\n            ? onTapUserInfo!()\n            // ignore: avoid_dynamic_calls\n            : onTapOption!(),\n    child: Padding(\n      padding: const EdgeInsets.all(18.0),\n      child: Container(\n        decoration: BoxDecoration(\n          color: Colors.white,\n          borderRadius: BorderRadius.circular(20),\n        ),\n        height: 70,\n        child: Row(\n          children: [\n            Expanded(\n              flex: 3,\n              child: Padding(\n                padding: const EdgeInsets.symmetric(\n                  horizontal: 25,\n                ),\n                child: Text(\n                  type == TileType.org\n                      ? orgInfo!.name!\n                      : type == TileType.user\n                          ? '${userInfo!.firstName!} ${userInfo!.lastName!}'\n                          : option!.title,\n                  style: type == TileType.org\n                      ? Theme.of(context)\n                          .textTheme\n                          .headlineSmall!\n                          .copyWith(fontSize: 18, color: Colors.black)\n                      : type == TileType.user\n                          ? Theme.of(context)\n                              .textTheme\n                              .titleLarge!\n                              .copyWith(fontSize: 18, color: Colors.black)\n                          : option!.trailingIconButton == null\n                              ? Theme.of(context)\n                                  .textTheme\n                                  .bodyMedium!\n                                  .copyWith(fontSize: 18, color: Colors.black)\n                              : Theme.of(context)\n                                  .textTheme\n                                  .headlineSmall!\n                                  .copyWith(\n                                    fontSize: 18,\n                                    color: Colors.black,\n                                  ),\n                ),\n              ),\n            ),\n            Expanded(\n              flex: 1,\n              child: type != TileType.user\n                  ? type == TileType.org\n                      ? Icon(\n                          orgInfo!.isPublic! ? Icons.lock_open : Icons.lock,\n                          color: orgInfo!.isPublic!\n                              ? const Color(0xFF34AD64)\n                              : const Color(0xffFABC57),\n                        )\n                      : option!.trailingIconButton ?? const SizedBox()\n                  : const SizedBox(),\n            ),\n          ],\n        ),\n      ),\n    ),\n  );\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var i=n(67294);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);