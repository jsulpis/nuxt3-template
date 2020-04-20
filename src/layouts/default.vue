<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/_colors.scss";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button-- {
  &green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $color-green;
    color: $color-green;
    text-decoration: none;
    padding: 10px 30px;

    &:hover {
      color: #fff;
      background-color: $color-green;
    }
  }

  &grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $color-grey;
    color: $color-grey;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;

    &:hover {
      color: #fff;
      background-color: $color-grey;
    }
  }
}
</style>
