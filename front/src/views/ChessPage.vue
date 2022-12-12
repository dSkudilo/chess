<template>
  <div class="chess">
    <TheBoard/>
  </div>
</template>
<script>
import TheBoard from '@/components/TheCell'
export default {
  name: 'ChessPage',
  components: { TheBoard }
}
</script>
<style lang="scss" scoped>
.chess{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
