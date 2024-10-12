"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[30241],{53827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=n(85893),s=n(11151);const o={},d="build method",l={id:"talawa-mobile-docs/widgets_post_widget/NewsPost/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_post_widget/NewsPost/build.md",sourceDirName:"talawa-mobile-docs/widgets_post_widget/NewsPost",slug:"/talawa-mobile-docs/widgets_post_widget/NewsPost/build",permalink:"/docs/talawa-mobile-docs/widgets_post_widget/NewsPost/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_post_widget/NewsPost/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"post_list_widget library",permalink:"/docs/talawa-mobile-docs/widgets_post_list_widget/widgets_post_list_widget-library"},next:{title:"function property",permalink:"/docs/talawa-mobile-docs/widgets_post_widget/NewsPost/function"}},r={},a=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,i.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,i.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,i.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,i.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,i.jsxs)("p",{children:["The given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,i.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,i.jsxs)("li",{children:["any ambient state obtained from the ",(0,i.jsx)("code",{children:"context"})," using\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,i.jsxs)("p",{children:["If a widget's ",(0,i.jsx)("a",{href:"../../widgets_post_widget/NewsPost/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,i.jsx)("p",{children:"See also:"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:'@override\nWidget build(BuildContext context) {\n  return Column(\n    crossAxisAlignment: CrossAxisAlignment.start,\n    children: [\n      // const PinnedPostCarousel(),\n      ListTile(\n        leading: CustomAvatar(\n          isImageNull: post.creator!.image == null,\n          firstAlphabet:\n              post.creator!.firstName!.substring(0, 1).toUpperCase(),\n          imageUrl: post.creator!.image,\n          fontSize: 24,\n        ),\n        title: Text(\n          "${post.creator!.firstName} ${post.creator!.lastName}",\n          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w400),\n        ),\n        subtitle: Text(post.getPostCreatedDuration()),\n      ),\n      DescriptionTextWidget(text: post.description!),\n      Container(\n        height: 400,\n        color:\n            Theme.of(context).colorScheme.primaryContainer.withOpacity(0.5),\n        child: PostContainer(id: post.sId),\n      ),\n      BaseView<LikeButtonViewModel>(\n        onModelReady: (model) {\n          model.initialize(post.likedBy ?? [], post.sId);\n        },\n        builder: (context, model, child) => Column(\n          children: [\n            Padding(\n              padding:\n                  const EdgeInsets.symmetric(horizontal: 16, vertical: 10),\n              child: Row(\n                mainAxisAlignment: MainAxisAlignment.spaceBetween,\n                children: [\n                  GestureDetector(\n                    onTap: () => function != null ? function!(post) : {},\n                    child: Text(\n                      "${model.likedBy.length} ${AppLocalizations.of(context)!.strictTranslate("Likes")}",\n                      style: const TextStyle(\n                        fontFamily: \'open-sans\',\n                        fontWeight: FontWeight.w800,\n                      ),\n                    ),\n                  ),\n                  GestureDetector(\n                    onTap: () => function != null ? function!(post) : {},\n                    child: Text(\n                      "${post.comments!.length} ${AppLocalizations.of(context)!.strictTranslate("comments")}",\n                    ),\n                  )\n                ],\n              ),\n            ),\n            const Padding(\n              padding: EdgeInsets.symmetric(horizontal: 16.0),\n              child: Divider(),\n            ),\n            Padding(\n              padding:\n                  const EdgeInsets.symmetric(horizontal: 16, vertical: 5),\n              child: Row(\n                children: [\n                  GestureDetector(\n                    onTap: () {\n                      model.toggleIsLiked();\n                    },\n                    child: Icon(\n                      Icons.thumb_up,\n                      color: model.isLiked\n                          ? Theme.of(context).colorScheme.secondary\n                          : const Color(0xff737373),\n                    ),\n                  ),\n                  GestureDetector(\n                    onTap: () => function != null ? function!(post) : {},\n                    child: const Padding(\n                      padding: EdgeInsets.only(left: 18.0),\n                      child: Icon(\n                        Icons.comment,\n                        color: Color(0xff737373),\n                      ),\n                    ),\n                  ),\n                ],\n              ),\n            ),\n          ],\n        ),\n      ),\n    ],\n  );\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var i=n(67294);const s={},o=i.createContext(s);function d(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);