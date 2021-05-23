<template>
  <div>
    <BaseNav />
    <BaseHeader />
    <BaseMain />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/layout/BaseHeader";
import BaseMain from "@/components/layout/BaseMain";
import BaseFooter from "@/components/layout/BaseFooter";
import BaseNav from "@/components/share-tools/BaseNav";

export default {
  name: "BaseLayout",
  components: {
    BaseHeader,
    BaseMain,
    BaseFooter,
    BaseNav,
  },
};
</script>