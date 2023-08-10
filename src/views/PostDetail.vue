<template>
    <div>
        <h2>View Post</h2>
        <div v-if="loading">Loading...</div>
        <div v-if="post">
            <h3>[ID: {{ post.id }}]</h3>
            <div>{{ post.text }}</div>
            <button v-on:click="removePost(post.id)">Delete</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRouter, useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { usePostListStore } from '@/stores/usePostStore'

const router = useRouter();
const route = useRoute();
const store = usePostListStore()

const loading = ref(false);
const { post } = storeToRefs(store)

onBeforeMount(() => {
    fetchData();
});
const removePost = (id) => {
    store.removePost(id);
    router.push("/posts");
};
const fetchData = () => {
    loading.value = true;
    if (route.params.id) {
        store.loadPost(+route.params.id).then(() => {
            loading.value = false;
        });
    }
};

// route.params.id 값이 변경되는 것을 watch 한다
watch(() => route.params.id, fetchData)

</script>

<style scoped>
button {
    margin: 1rem 0;
}
</style>