<template>
  <footer class="relative p-6 text-sm bg-gray-200">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap items-end">
        <div class="w-full px-4 text-base lg:w-6/12">
          <p>
            Theme:
            <footer-link href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation">
              Tailwind Starter Kit
            </footer-link>
            by <footer-link href="https://www.creative-tim.com">Creative Tim</footer-link>.
          </p>
        </div>
        <div class="flex flex-wrap w-full px-4 lg:w-6/12 lg:text-left">
          <div class="w-full px-4 mt-3 lg:w-5/12">
            <span class="block mb-1 text-sm font-semibold uppercase opacity-75">
              Useful Links
            </span>
            <ul class="list-unstyled">
              <li>
                <footer-link href="https://www.netlify.com/jamstack/">
                  About the JAMstack
                </footer-link>
              </li>
              <li>
                <footer-link href="https://nextjs-template.juliensulpis.now.sh">
                  Next.js Template
                </footer-link>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 mt-3 lg:w-5/12">
            <span class="block mb-1 text-sm font-semibold uppercase opacity-75">
              About
            </span>
            <ul class="list-unstyled">
              <li>
                <footer-link href="https://github.com/jsulpis/nuxtjs-template">
                  Star on GitHub
                </footer-link>
              </li>
              <li>
                <footer-link href="https://github.com/jsulpis/nuxtjs-template/blob/master/LICENSE">
                  MIT License
                </footer-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="mt-3 mb-6 border-gray-400" />
      <div class="w-full mx-auto">
        <p class="py-1 text-sm">
          © {{ new Date().getFullYear() }} made with <FontAwesomeIcon icon="heart" size="xs" /> by
          <footer-link href="https://github.com/jsulpis">Julien Sulpis</footer-link>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
const FooterLink = {
  functional: true,
  render: (h, { data, children }) => (
    <a href={data.attrs.href} class="font-semibold hover:text-gray-900">
      {children}
    </a>
  )
};

export default {
  components: {
    FooterLink
  }
};
</script>
