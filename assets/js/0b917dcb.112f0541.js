"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81147],{9865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const d={},s="build method",r={id:"talawa-mobile-docs/widgets_event_card/EventCard/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_event_card/EventCard/build.md",sourceDirName:"talawa-mobile-docs/widgets_event_card/EventCard",slug:"/talawa-mobile-docs/widgets_event_card/EventCard/build",permalink:"/docs/talawa-mobile-docs/widgets_event_card/EventCard/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_event_card/EventCard/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"EventCard constructor",permalink:"/docs/talawa-mobile-docs/widgets_event_card/EventCard/"},next:{title:"event property",permalink:"/docs/talawa-mobile-docs/widgets_event_card/EventCard/event"}},l={},c=[{value:"Implementation",id:"implementation",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"build-method",children:"build method"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["@",(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,i.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,i.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,i.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,i.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,i.jsxs)("p",{children:["The given ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,i.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,i.jsxs)("li",{children:["any ambient state obtained from the ",(0,i.jsx)("code",{children:"context"})," using\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,i.jsxs)("p",{children:["If a widget's ",(0,i.jsx)("a",{href:"../../widgets_event_card/EventCard/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,i.jsx)("p",{children:"See also:"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  final bool isRegistered = event.isRegistered ?? false;\n  return Padding(\n    padding: const EdgeInsets.only(bottom: 10),\n    child: Stack(\n      children: [\n        Card(\n          shape: RoundedRectangleBorder(\n            side:\n                isRegistered && userConfig.currentUser.id != event.creator!.id\n                    ? BorderSide(\n                        color: Theme.of(context).colorScheme.secondary,\n                        width: SizeConfig.screenWidth! * 0.008,\n                      )\n                    : BorderSide.none,\n          ),\n          elevation: 3,\n          color: Theme.of(context).primaryColor,\n          child: Column(\n            children: [\n              AspectRatio(\n                aspectRatio: 2.5,\n                child: Container(\n                  height: SizeConfig.screenHeight! * 0.11,\n                  width: double.infinity,\n                  decoration: BoxDecoration(\n                    color: Colors.grey.withOpacity(0.3),\n                    image: const DecorationImage(\n                      fit: BoxFit.fitWidth,\n                      alignment: FractionalOffset.topCenter,\n                      image: NetworkImage(\n                        'https://picsum.photos/id/1022/200/300',\n                      ),\n                    ),\n                  ),\n                  child: ClipRRect(\n                    child: BackdropFilter(\n                      filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),\n                      child: Container(\n                        decoration: BoxDecoration(\n                          color: Colors.white.withOpacity(0.0),\n                        ),\n                      ),\n                    ),\n                  ),\n                ),\n              ),\n              Padding(\n                padding: const EdgeInsets.all(10),\n                child: Column(\n                  children: [\n                    Row(\n                      children: [\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.48,\n                          child: isSearchItem\n                              ? RichText(\n                                  text: TextSpan(\n                                    text: eventTitleHighlightedText,\n                                    style: Theme.of(context)\n                                        .textTheme\n                                        .headlineSmall!\n                                        .copyWith(\n                                          fontWeight: FontWeight.bold,\n                                        ),\n                                    children: [\n                                      TextSpan(\n                                        text: eventTitleNormalText,\n                                        style: Theme.of(context)\n                                            .textTheme\n                                            .headlineSmall!\n                                            .copyWith(\n                                              color: Colors.grey,\n                                            ),\n                                      )\n                                    ],\n                                  ),\n                                  overflow: TextOverflow.ellipsis,\n                                  textAlign: TextAlign.left,\n                                )\n                              : Text(\n                                  event.title!,\n                                  style: Theme.of(context)\n                                      .textTheme\n                                      .headlineSmall,\n                                ),\n                        ),\n                        const Spacer(),\n                        const Icon(\n                          Icons.calendar_today,\n                          size: 13,\n                        ),\n                        const Spacer(),\n                        Text(\n                          \"${event.startDate!} - ${event.endDate!}\",\n                          style: Theme.of(context).textTheme.bodySmall,\n                        )\n                      ],\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.006,\n                    ),\n                    Row(\n                      children: [\n                        const Icon(\n                          Icons.schedule,\n                          size: 12,\n                        ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.015,\n                        ),\n                        Text(\n                          \"${event.startTime!} - ${event.endTime!}\",\n                          style: Theme.of(context).textTheme.bodySmall,\n                        ),\n                        const Spacer(),\n                        const Icon(\n                          Icons.place,\n                          size: 12,\n                        ),\n                        SizedBox(\n                          child: Text(\n                            event.location!.substring(\n                              0,\n                              min(event.location!.length, 20),\n                            ),\n                            style: Theme.of(context).textTheme.bodySmall,\n                          ),\n                        )\n                      ],\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.013,\n                    ),\n                    Row(\n                      mainAxisAlignment: MainAxisAlignment.spaceBetween,\n                      crossAxisAlignment: CrossAxisAlignment.start,\n                      children: [\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.55,\n                          child: Text(\n                            event.description!,\n                            style: Theme.of(context).textTheme.bodySmall,\n                            overflow: TextOverflow.ellipsis,\n                            textAlign: TextAlign.left,\n                            maxLines: 3,\n                          ),\n                        ),\n                        const Icon(\n                          Icons.chevron_right,\n                        ),\n                      ],\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.007,\n                    ),\n                    Row(\n                      mainAxisAlignment: MainAxisAlignment.end,\n                      children: [\n                        userConfig.currentUser.id == event.creator!.id\n                            ? Row(\n                                children: [\n                                  Icon(\n                                    Icons.verified,\n                                    size: 13,\n                                    color: Theme.of(context)\n                                        .colorScheme\n                                        .secondary,\n                                  ),\n                                  SizedBox(\n                                    width: SizeConfig.screenWidth! * 0.013,\n                                  ),\n                                  Text(\n                                    AppLocalizations.of(context)!\n                                        .strictTranslate('Created'),\n                                    style:\n                                        Theme.of(context).textTheme.bodySmall,\n                                  ),\n                                ],\n                              )\n                            : const SizedBox(),\n                        const Spacer(),\n                        event.isPublic!\n                            ? Icon(\n                                Icons.lock_open,\n                                size: 13,\n                                color: Theme.of(context).colorScheme.primary,\n                              )\n                            : Icon(\n                                Icons.lock,\n                                size: 13,\n                                color: Theme.of(context).colorScheme.primary,\n                              ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.013,\n                        ),\n                        event.isPublic!\n                            ? Text(\n                                AppLocalizations.of(context)!\n                                    .strictTranslate('public'),\n                                style: Theme.of(context).textTheme.bodySmall,\n                              )\n                            : Text(\n                                AppLocalizations.of(context)!\n                                    .strictTranslate('private'),\n                                style: Theme.of(context).textTheme.bodySmall,\n                              ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.027,\n                        ),\n                        const Icon(\n                          Icons.people_outline,\n                          size: 13,\n                          color: Color(0xff4285F4),\n                        ),\n                        SizedBox(\n                          width: SizeConfig.screenWidth! * 0.013,\n                        ),\n                        event.attendees != null\n                            ? Text(\n                                event.attendees!,\n                                style: Theme.of(context).textTheme.bodySmall,\n                              )\n                            : Text(\n                                (event.registrants?.length ?? 0).toString(),\n                                style: Theme.of(context).textTheme.bodySmall,\n                              )\n                      ],\n                    ),\n                  ],\n                ),\n              )\n            ],\n          ),\n        ),\n        Positioned(\n          top: SizeConfig.screenHeight! * 0.007,\n          right: SizeConfig.screenWidth! * 0.013,\n          child: isRegistered &&\n                  userConfig.currentUser.id != event.creator!.id\n              ? DecoratedBox(\n                  decoration: BoxDecoration(\n                    color: Theme.of(context).colorScheme.secondary,\n                    borderRadius: const BorderRadius.only(\n                      bottomLeft: Radius.circular(15),\n                    ),\n                  ),\n                  child: Padding(\n                    padding: const EdgeInsets.all(8.0),\n                    child: Center(\n                      child: Text(\n                        AppLocalizations.of(context)!\n                            .strictTranslate(\"Registered\"),\n                        style:\n                            Theme.of(context).textTheme.titleLarge!.copyWith(\n                                  color: Colors.white,\n                                  fontWeight: FontWeight.w700,\n                                ),\n                      ),\n                    ),\n                  ),\n                )\n              : const SizedBox(),\n        )\n      ],\n    ),\n  );\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},d=i.createContext(o);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);