"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[77783],{83315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>g});var a=t(85893),r=t(11151);const s={},i="generateRoute function",o={id:"talawa-mobile-docs/router/generateRoute",title:"generateRoute function",description:"Route generateRoute",source:"@site/docs/talawa-mobile-docs/router/generateRoute.md",sourceDirName:"talawa-mobile-docs/router",slug:"/talawa-mobile-docs/router/generateRoute",permalink:"/docs/talawa-mobile-docs/router/generateRoute",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/router/generateRoute.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"talawa_plugin_provider library",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/plugins_talawa_plugin_provider-library"},next:{title:"router library",permalink:"/docs/talawa-mobile-docs/router/router-library"}},u={},g=[{value:"Implementation",id:"implementation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"generateroute-function",children:"generateRoute function"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://api.flutter.dev/flutter/widgets/Route-class.html",children:"Route"})," generateRoute\n(",(0,a.jsx)(n.a,{href:"https://api.flutter.dev/flutter/widgets/RouteSettings-class.html",children:"RouteSettings"})," settings)"]}),"\n",(0,a.jsxs)("p",{children:["The MaterialApp provides us with a property called generateRoute where\nwe can pass in a Function that returns a Route",(0,a.jsx)("dynamic",{children:" and takes in RouteSettings"})]}),"\n",(0,a.jsx)("p",{children:"Thus for this purpose, we create a function named generateRoute"}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Route<dynamic> generateRoute(RouteSettings settings) {\n  // The settings contains the route information of the requested route.\n  // It provides two key things to us: the name, and the arguments.\n  // We use the name to determine which view to return.\n  switch (settings.name) {\n    // Returns the SplashScreen\n    case Routes.splashScreen:\n      final int mainScreenIndex = settings.arguments! as int;\n      return MaterialPageRoute(\n        builder: (context) => SplashScreen(\n          key: const Key('SplashScreen'),\n          mainScreenIndex: mainScreenIndex,\n        ),\n      );\n\n    // Returns the SelectLanguage Widget\n    case Routes.languageSelectionRoute:\n      return MaterialPageRoute(\n        builder: (context) => const SelectLanguage(key: Key('SelectLanguage')),\n      );\n\n    // Returns the SetUrl Widget\n    case Routes.setUrlScreen:\n      final String uri = settings.arguments!.toString();\n      return MaterialPageRoute(\n        builder: (context) => SetUrl(\n          key: const Key('SetUrl'),\n          uri: uri,\n        ),\n      );\n\n    // Returns the Login Widget\n    case Routes.loginScreen:\n      return MaterialPageRoute(\n        builder: (context) => const Login(key: Key('Login')),\n      );\n\n    // Returns the SelectOrganization Widget\n    case Routes.selectOrgScreen:\n      final String id = settings.arguments!.toString();\n      return CupertinoPageRoute(\n        builder: (context) => SelectOrganization(\n          key: const Key('Signup'),\n          selectedOrgId: id,\n        ),\n      );\n\n    // Returns the SignUpDetails Widget\n    case Routes.signupDetailScreen:\n      final OrgInfo org = settings.arguments! as OrgInfo;\n      return CupertinoPageRoute(\n        builder: (context) => SignUpDetails(\n          key: const Key('Signup'),\n          selectedOrg: org,\n        ),\n      );\n\n    // Returns the WaitingPge Widget\n    case Routes.waitingScreen:\n      return CupertinoPageRoute(\n        builder: (context) => const WaitingPage(key: Key('Waiting')),\n      );\n\n    // Returns the Recover Widget\n    case Routes.recoverScreen:\n      return MaterialPageRoute(\n        builder: (context) => const Recover(key: Key('Recover')),\n      );\n\n    // Returns the ChangePass Widget\n    case Routes.updateScreen:\n      return MaterialPageRoute(\n        builder: (context) => const ChangePass(key: Key('Update')),\n      );\n\n    // Returns the OrganizationFeed Widget\n    case Routes.homeScreen:\n      return MaterialPageRoute(\n        builder: (context) => const OrganizationFeed(key: Key('HomeScreen')),\n      );\n\n    // Returns the MainScreen Widget\n    case Routes.mainScreen:\n      final MainScreenArgs mainScreenArgs =\n          settings.arguments! as MainScreenArgs;\n      //  final bool fromSignUp = settings.arguments! as bool;\n      return MaterialPageRoute(\n        builder: (context) => MainScreen(\n          key: const Key('MainScreen'),\n          mainScreenArgs: mainScreenArgs,\n        ),\n      );\n\n    // Returns the IndividualPostView Widget\n    case Routes.individualPost:\n      final Post post = settings.arguments! as Post;\n      return MaterialPageRoute(\n        builder: (context) => IndividualPostView(\n          key: const Key('IndividualPost'),\n          post: post,\n        ),\n      );\n\n    // Returns the PinnedPostPgae Widget\n    case Routes.pinnedPostPage:\n      final List<Post> pinnedPosts = settings.arguments! as List<Post>;\n      return MaterialPageRoute(\n        builder: (context) => PinnedPostPage(pinnedPosts: pinnedPosts),\n      );\n\n    // Returns the ExploreEvents Widget\n    case Routes.exploreEventsScreen:\n      return MaterialPageRoute(\n        builder: (context) => const ExploreEvents(key: Key('ExploreEvents')),\n      );\n\n    // Returns the EventInfoPage Widget\n    case Routes.eventInfoPage:\n      final Map<String, dynamic> args =\n          settings.arguments! as Map<String, dynamic>;\n      return MaterialPageRoute(\n        builder: (context) => EventInfoPage(\n          key: const Key('EventInfo'),\n          args: args,\n        ),\n      );\n\n    // Returns the CreateEventPage Widget\n    case Routes.createEventPage:\n      return MaterialPageRoute(\n        builder: (context) => const CreateEventPage(key: Key('CreateEvent')),\n      );\n\n    // Returns the ProfilePage Widget\n    case Routes.profilePage:\n      return MaterialPageRoute(\n        builder: (context) => const ProfilePage(key: Key('Profile')),\n      );\n\n    // Returns the EditProfilePage Widget\n    case Routes.editProfilePage:\n      return MaterialPageRoute(\n        builder: (context) => const EditProfilePage(key: Key('EditProfile')),\n      );\n\n    // Returns the JoinOrganizationAfterAuth Widget\n    case Routes.joinOrg:\n      final String id = settings.arguments!.toString();\n      return MaterialPageRoute(\n        builder: (context) => JoinOrganisationAfterAuth(\n          key: const Key('JoinOrganisationAfterAuth'),\n          orgId: id,\n        ),\n      );\n\n    case Routes.requestAccess:\n      final OrgInfo org = settings.arguments! as OrgInfo;\n      return CupertinoPageRoute(\n        builder: (context) => SendAccessRequest(\n          key: const Key('Signup'),\n          org: org,\n        ),\n      );\n    // Returns the EditEventPage Widget\n    case Routes.editEventPage:\n      final Event event = settings.arguments! as Event;\n      return MaterialPageRoute(\n        builder: (context) => EditEventPage(\n          key: const Key('EditEvent'),\n          event: event,\n        ),\n      );\n\n    // Returns the AppSettingsPage Widget\n    case Routes.appSettings:\n      return MaterialPageRoute(\n        builder: (context) => const AppSettingsPage(key: Key('AppSettings')),\n      );\n\n    // Returns the ChatMessageScreen Widget\n    case Routes.chatMessageScreen:\n      final List<dynamic> arguments = settings.arguments! as List<dynamic>;\n      final String chatId = arguments[0] as String;\n      final DirectChatViewModel model = arguments[1] as DirectChatViewModel;\n      return MaterialPageRoute(\n        builder: (context) => ChatMessageScreen(\n          key: const Key('ChatMessageScreen'),\n          chatId: chatId,\n          model: model,\n        ),\n      );\n\n    // Returns the MapScreen Widget\n    case Routes.mapScreen:\n      final arguments = settings.arguments! as Map<String, dynamic>;\n      final model = arguments['model'] as CreateEventViewModel?;\n      final latitude = arguments['latitude'] as double;\n      final longitude = arguments['longitude'] as double;\n      return MaterialPageRoute(\n        builder: (context) => MapScreen(\n          model,\n          latitude,\n          longitude,\n          key: const Key('MapScreen'),\n        ),\n      );\n    case Routes.calendar:\n      return MaterialPageRoute(\n        builder: (context) => EventCalendar(\n          settings.arguments! as List<Event>,\n          key: const Key('Calendar'),\n        ),\n      );\n    case Routes.eventTasks:\n      final eventId = settings.arguments! as String;\n      return MaterialPageRoute(\n        builder: (context) => EventTasksPage(\n          eventId: eventId,\n          key: const Key('EventTasks'),\n        ),\n      );\n    case Routes.userTasks:\n      return MaterialPageRoute(\n        builder: (context) => const UserTasksPage(\n          key: Key('UserTasks'),\n        ),\n      );\n    case Routes.addTask:\n      final eventId = settings.arguments! as String;\n      return MaterialPageRoute(\n        builder: (context) => CreateTaskPage(\n          key: const Key('AddTask'),\n          eventId: eventId,\n        ),\n      );\n    case Routes.editTask:\n      final task = settings.arguments! as Task;\n      return MaterialPageRoute(\n        builder: (context) => EditTaskPage(\n          key: const Key('EditTask'),\n          task: task,\n        ),\n      );\n    // Returns the DemoPageView Widget by default\n    case Routes.selectContact:\n      return MaterialPageRoute(\n        builder: (context) => const SelectContact(key: Key('selectContact')),\n      );\n    default:\n      return MaterialPageRoute(\n        builder: (context) => const DemoPageView(\n          key: Key(\"DemoPage\"),\n        ),\n      );\n  }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);