<template>
  <div>
    <BaseIntro />
    <BaseIntroText />
  </div>
</template>

<script>
import BaseIntro from "@/components/share-tools/BaseIntro";
import BaseIntroText from "@/components/share-tools/BaseIntroText";
export default {
  name: "Home",
  components: {
    BaseIntro,
    BaseIntroText,
  },
};
</script>
