import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null
  }

  // Emit events for all github link clicks
  function anchorListener(event) {
    let element = event.target
    if (
      element.tagName == 'A' &&
      element.href.startsWith('https://github.com')
    ) {
      analytics.track('Github Navigation', {
        type: document.title.split(' | ')[0],
        url: element.href,
        text: element.textContent,
      })
    }
  }

  function recordDocumentationPage() {
    const categoryElement = document.querySelector(
      '.menu__link--sublist.menu__link--active',
    )

    const titleElement = document.querySelector('.menu__link--active.active')

    if (categoryElement && titleElement) {
      analytics.track('Documentation Viewed', {
        category: categoryElement.textContent,
        title: titleElement.textContent,
      })
    } else if (titleElement) {
      analytics.track('Documentation Viewed', {
        title: titleElement.textContent,
      })
    }
  }

  // On any click call the anchor listener event
  document.addEventListener('click', anchorListener)

  // Wait until next tick to record documentation viewed
  setTimeout(recordDocumentationPage, 100)

  return {
    onRouteUpdate() {
      // Wait until next tick to record documentation viewed and page view
      setTimeout(() => {
        analytics.page()
        recordDocumentationPage()
      }, 100)
    },
  }
})()
