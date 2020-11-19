<template>
    <a-layout class="pg-index">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <a-menu theme="dark" mode="inline" @click="handleMenuClick">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <span>app1-vue</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span>app2-react</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout style="height: 100vh">
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'}">
                <div id="app_container"></div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
    name: 'Index',
    setup() {
        const collapsed = ref(false)
        const menuPath = {
            '1': '/app1',
            '2': '/app2',
        }

        return {
            collapsed,
            menuPath
        }
    },
    methods: {
        handleMenuClick({ item, key, keyPath }){
            console.log('menu-info: ', { item, key, keyPath })
            this.$router.push(this.menuPath[key])
        }
    }
}
</script>

<style lang="less">
.pg-index .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.pg-index .trigger:hover {
  color: #1890ff;
}
</style>
