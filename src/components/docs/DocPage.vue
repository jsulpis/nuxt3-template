<template>
  <div>
    <h3>Installation</h3>
    <ul>
      <li>
        <div class="inline-flex flex-col w-10/12 lg:w-3/4">
          <p class="opacity-100">Clone the repository and install the dependencies:</p>
          <CodeBlock class="mt-1"
            >git clone https://github.com/jsulpis/nuxtjs-template.git && cd nuxtjs-template && yarn</CodeBlock
          >
        </div>
      </li>
      <li>Update the <span class="filename">package.json</span> metadata with yours.</li>
    </ul>

    <h3>Configuration</h3>
    <h4>Tailwind CSS</h4>
    <ul>
      <li>
        You may want to change the theme in
        <span class="filename">tailwind.config.js</span> to use your own color palette.
      </li>
      <li>
        See the
        <a href="https://tailwindcss.com/docs/theme">documentation</a> for more details.
      </li>
    </ul>

    <h4>Purge CSS</h4>
    <ul>
      <li>
        This plugin, which is bundled with @nuxtjs/tailwindcss, will delete all unused CSS in the final bundle and
        dramatically reduce its size, but it comes with a few constraints. For example you will lose the css classes
        that you build dynamically using string concatenation if you don't use some tricks.
      </li>
      <li>
        This
        <a href="https://www.viget.com/articles/a-better-approach-for-using-purgecss-with-tailwind/">article</a>
        provides some solutions to common issues when working with Purge CSS.
      </li>
    </ul>

    <h4>Cypress</h4>
    <ul>
      <li>The project has scripts to run the Cypress tests locally and on the CI.</li>
      <li>
        You can use the free plan of the
        <a href="https://docs.cypress.io/guides/dashboard/introduction.html">Cypress Dashboard</a>
        to have commit status checks on your pull requests. To do this, you need to login to the Cypress Dashboard,
        initialize the project, get the record key and put it as the environment variable CYPRESS_RECORD_KEY in Travis.
        More information on the
        <a href="https://docs.cypress.io/guides/dashboard/projects.html">documentation</a>.
      </li>
    </ul>

    <h4>SonarCloud</h4>
    <ul>
      <li>Create a new project on SonarCloud and note the generated token.</li>
      <li>
        Update the project description in
        <span class="filename">sonar-project.properties</span>.
      </li>
      <li>See the Travis CI configuration below to trigger the analysis during the build.</li>
    </ul>

    <h4>Travis CI</h4>
    <ul>
      <li>Activate your repository in your Travis CI settings to trigger the builds on git push.</li>
      <li>
        In the repository settings, add an environment variable called
        <span class="filename">SONAR_TOKEN</span> and paste it the token you got when creating the project on
        SonarCloud.
      </li>
      <li>
        Change the sonarcloud organization in
        <span class="filename">.travis.yml</span>.
      </li>
      <li>You should now have your pull requests analyzed and get checks from Travis CI and SonarCloud.</li>
    </ul>

    <h4>Google Analytics</h4>
    <ul>
      <li>
        Register your website in your
        <a href="https://analytics.google.com/analytics/web">Google Analytics dashboard</a> and note its Tracking ID.
      </li>
      <li>
        Create an environment variable called GA_TRACKING_ID with your new id. See the instructions below to do it on
        Netlify.
      </li>
    </ul>

    <h3>Deployment</h3>
    <p>
      The template is ready to be deployed on <a href="https://www.netlify.com/">Netlify</a> so the following
      instructions target this platform. Of course you can easily deploy it with any other hosting platform like
      <a href="https://vercel.com/docs">Vercel</a>.
    </p>

    <h4>Environment variables</h4>
    <p>
      You will need to add some environment variables in your Netlify dashboard (Site Settings > Build & deploy >
      Environment).
    </p>
    <ul>
      <li>
        NODE_VERSION: <span class="font-bold">12</span> (some packages do not support the default node version on
        Netlify)
      </li>
      <li>GA_TRACKING_ID: <span class="font-bold">{yourGoogleAnalyticsTrackingID}</span></li>
      <li>
        the 'URL' variable, which is the main url of the site, is used in the social networks meta tags. You can add it
        to your local <span class="filename">.env</span> file, but note that this is a
        <a href="https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata"
          >built-in variable</a
        >
        on Netlify so you don't have to add it in your settings.
      </li>
    </ul>

    <h4>Build settings</h4>
    <ul>
      <li>Build command: <span class="font-bold">yarn generate</span></li>
      <li>Publish directory: <span class="font-bold">dist</span></li>
    </ul>
  </div>
</template>

<script>
import CodeBlock from "@/components/docs/CodeBlock.vue";

export default {
  components: {
    CodeBlock
  }
};
</script>

<style lang="scss" scoped>
ul {
  @apply leading-relaxed opacity-90;
}

li {
  @apply list-disc list-inside;
}

a {
  @apply text-primary-500 font-semibold;

  &:hover {
    @apply opacity-75;
  }
}

.filename {
  @apply font-mono text-sm;
}
</style>
