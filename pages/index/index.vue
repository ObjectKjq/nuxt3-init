<template>
    <van-nav-bar title="许愿墙"  @click-right="show = true" right-text="添加心愿"/>
    <div v-if="list.length === 0 || list == undefined">
        <van-skeleton title :row="3"/>
        <van-skeleton title :row="3"/>
        <van-skeleton title :row="3"/>
        <van-skeleton title :row="3"/>
        <van-skeleton title :row="3"/>
        <van-skeleton title :row="3"/>
    </div>
    <van-list
        v-else
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <div v-for="(item, index) in list" :key="index" class="container">
            <div class="contentbox">
                <h3>{{ item.title }}</h3>
                <span>{{ UTCTime(item.createTime) }}</span>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </van-list>
    <van-dialog @confirm="onClickRight" v-model:show="show" title="添加愿望" show-cancel-button>
        <van-field
            v-model="wish.title"
            clearable
            label="标题"
            required
            left-icon="like"
            placeholder="标题内容"
        />
        <van-field
            v-model="wish.content"
            rows="2"
            autosize
            required
            left-icon="chat"
            label="内容"
            type="textarea"
            maxlength="1000"
            placeholder="请输入内容"
            show-word-limit
        />
    </van-dialog>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import { UTCTime } from '../../utils/UTCTime';

const wish = ref({
    title: '',
    content: ''
});
const show = ref(false);
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

let page = 1;
let num = 10;

const { data:res, error } = await useFetch(`/api/wish?page=${page}&num=${num}`);
const {data:resTotal} = await useFetch('/api/wish/total');
list.value.push(...res.value.data);

/**
 * 分页获取数据
 */
const onLoad = async () => {
    loading.value = true;
    //表示加载完成  
    page++;
    const { data:addRes, error } = await useFetch(`/api/wish?page=${page}&num=${num}`);
    list.value.push(...addRes.value.data);
    loading.value = false;
    if(page * num >= resTotal.value.data){
        finished.value = true;
    }
}

/**
 * 点击右侧按钮弹出添加愿望弹窗
 */
const onClickRight = async () => {
    const { data:resAdd, error } = await useFetch('/api/wish', {
        method: 'POST',
        body: wish.value
    });
    if(error.value || resAdd.value.code === 400){
        showFailToast('添加失败');
    }else{
        showSuccessToast('添加成功');
        list.value.unshift(wish.value);
    }
    wish.value = {
        title: '',
        content: ''
    };
};

</script>
<style scoped>
    .container{
        margin: 16px;
    }
    .contentbox{
        padding: 10px;
        position: relative;
        box-shadow: 2px 2px 5px 0px inset #d3d3d3;
        border-radius: 10px;
    }
    .contentbox h3{
        color: black;
        margin: 10px 10px 0px 10px;
    }
    .contentbox span{
        color: #4fe9eb;
        margin-left: 10px;
        font-size: 10px;
    }
    .contentbox p{
        color: black;
        margin: 10px;
    }
</style>