<template>
    <div class="center-view">
        <div v-if="!userInfo.headIcon" class="avatar">
            <img class="avator-icon" src="data:image/png;base64,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" alt="">
            <div class="nick-name" @click="gotoLogin">立即登录</div>
        </div>
        <div v-if="userInfo.headIcon" class="avatar">
            <img class="avator-icon" :src="userInfo.headIcon" alt="">
            <div class="nick-name">{{userInfo.mobile}}</div>
        </div>
        <ul class="my-order-tab">
            <li>
                <img width="26px" height="26px" src="data:image/png;base64,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" alt="">
                <span class="mint-badge is-primary is-size-small" style="display:none">99+</span>
                <div class="common-p">电影订单</div>
            </li>
            <li>
                <img width="26px" height="26px" src="data:image/png;base64,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" alt="">
                <div class="common-p">商品订单</div>
            </li>
        </ul>
        <div class="margin-set my-card">
            <img width="20px" height="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXtJREFUWAntmLFOwzAQQO+iVurcrRL/wCfACvxBR0DwAUiwdOwC7AwVdOYHStf+At8AEhs/kCqH72xHhTqDaXCMdJEap9dz7+U5apMD0E0NdGsAfXm6Pd+DNd2b9wdANPLxpCPih6m9gn5xjTeP71xbAAWupFcAGiYFaiyGn9DHfYbsSU5Z3ZlxaHCX0CsuPH3j/D/6wK5iNTMWj6AkZhoXUgvxUMYO4bi+iBkMLoXFMVlAd811ZU6A3A6vHt7k0DFZwM2MzI4VcNcFyd6g/Zlxp0nTU9r1jNue/78M4mRe//W1bSLm+zZXMnuDChiztKFcNRiyEhNTgzG2QrlqMGQlJpa9wW83CzFn9ptcmp4tzIPZ8fZcfMHJ08l2HCAPgwiNd1FJDTZZCpnzsTwMeprAqIABKVEha5B7ImaTJ/uo6e0n1wyOyQJyw4a3dTWrEySQdle3PrisY8q+eSQGpeVhukmA+Gxestxp3blqXJsZXGerEwYtqgZ+GPgCGlFng13G+JYAAAAASUVORK5CYII=" alt="">
            <span class="label">卖座券</span>
            <img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAAERNkEIAAAAAXNSR0IArs4c6QAAAyRJREFUSA3dVjtvE0EQ3l3bIiQggSBBggbxqFJEvBT7rPhxqXgKSkqECC0/AAFKanoQKBUVXYAIGp99ju4MIQVpEUFCCgUEpBRJFGT7hpmLZ3V3Pic2BUJs4dmZ+fbbudnZWQsRHaWKAyFbyXbXfUN5zr0U8nShLC4uDhBM0c/P1bXnJEXJdr76E/5p25QdLIMAn4sdQsrXocBoRx2yRnWalO3aVNDncwN412377cmgw58Howg52REOLQRBhVHa3mbQnj+dSF5o2c4sgLiQEOpKoZB5yfag1GA2+nkD6FeD+/YWh4fX2L6tpI/o6UPw9JeCC2KTZlXcSQJJKZ+NF7I61GQwFjqkBjQ/CgFLQVAQ4897jrGN4e8YShV3OZiauF39dKl85ig5EdyIA5HNBxalbKTU7iHUE1bFWYkD6wPI5U6vpJQcxQZw0LLdhShYA8mRyxnzSqlbAHDGqtSmo+A2HRmf0sehnGCnPlc2sMRSnBcA52RCpc2xzLvQ1gwi2ZeEra7U9B6RHgssAyQ36+Ib+ptmIXuqI9Cz3To5sZp0pbUxctJV3kgRmIdeQQZKNuYx0ZcSh7J4CAwiqYEIek/JpqRns8b3IIjm/tZW1XmIoLNCqQlKehREeotRLUsBU2Yu8yQO9I/ZylX3Dr0E0R7ca5jh8wFxRIA47IF3N1psvRC3FSa9Kz9W18tUlD6RlBtSSZOKs1viNlJeWHbdE1AHFzv24Ba5+DywK2Gk02mq2W1HR1JehfVzETwxg3qCbFLINzKfuUytgTFRuSMpL8ADfID5vs86kk+ZBeMe60HZNSktoisLVXeGHrEWSRMfs2vRx6wnUo7GcZyhX3Xh4rU6TjYk+cB9gfRwSZFlh0HVgYSzTIh/SzaSSt4OLuspUuqoILwbmgAv/3jMve6KlDoutunHTIaP6rSZN26yHpXbklpztVHwwMKL0E8LEbxwYP+ewsjIyNb/xChbS48lpYPYbIgaltAxn0yKFZmSRtEwPnXgCZlDpFQyXrX2AiM730I1VUJeLY4Zr0KrdlB0eyacV3W/UEOhOd73STNn6GIn2/83fgPFf0W2rAKXswAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="margin-set my-card">
            <img width="20px" height="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAzxJREFUWAntWEFoE0EUnUm7BkSktFLQCgoeCirUo3qoLVpqThaEoK0UKeJNBQ8KaSsBS8FePHgTBWlSC0XBi1SbajT14NGCCB7Eg0ovmosHcTfZ7//rznaymxm3bCIKu5DMn5n/33u8mZ3NhrF//OL19BXz2Z0VsGaAsT4GsL1eTsPGOF9DES9auXGl/0z2sx83IJDEWba1yhi0+5Ob2+dlI2H0+EW2+knJOUcc54sGN877C/z5UfuOIWDdxpVK/eZmwzJmQu5Q7Cwrtn9DHPGRAcRFseCmWFwBgWLPtYBZFUnNbj2uOvs9KNBV8xP4yrO58V3NFlecz+4mLhWPUiAw2FO14dXz3ES3qjjqOGFbFXOFuFRYgZvES+S8hMvdW+FQKs5lBvtHpt94c76g5ljCOd2xIUoR84Blw1PceJ3M5RJzcqt0cEuy4zjn/AmK7KxUeXH5/uQhuVDE4lgCgNPO/sV9RDEdVTQn8uSWsAiTsFHcInHJ83KsFHg4ffnHjqRxAu14gEvQZlerhaX8taNyMcXiWNrW1c16T151PhTTUeUeGzUlhEFYhEnYXUljiLhqkqSOeokxaV86a8LCwqmCuXqH2XCWQeVxIZeZROBvHgawFMV7Dw6x5OatzjDFpYc3KE4V8pkxZ5C+gHWAXbmOUZIl+L2BTT3neDqtPS20AgmTAHDJxpZz49/xnLoAwGbowFq/ajrrwxhhXRvm3q0ZxA7u0VvHRqYu4RZSF7tFfxRIeS7QxcLsxEek3e/WOg2SHbHxLnz3+pHjIg1STFeC8Q+o4KXT8b7424HRqZtsdNob0QWhBAoAB1h03JZuBBtviK9f3re7y+rO8HJLwuiL+qhU3iQ+Hcqu86jChzy6PI9Wr9GH4noPfiWIZmJDDqpwXJeGVfNRxiM7GIU8TG0sMIxLupzYQZ07YeZiB8O4pMuJHdS5E2YudjCMS7qc2EGdO2HmYgfDuKTLiR3UuRNmLugg/WzHS/XSHQZ0ozkel8st1wcE0t8WlGDhf3ZeoVzR4Jg4iItgBbdMEXgnob9isWAQX2pTFpiflmYzcn7DY8s2XUxeJm4/QcDBwFuav6LR/Qa/BTZa3v+P9wstjEbQV26IwAAAAABJRU5ErkJggg==" alt="">
            <span class="label">组合红包</span>
            <img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAAERNkEIAAAAAXNSR0IArs4c6QAAAyRJREFUSA3dVjtvE0EQ3l3bIiQggSBBggbxqFJEvBT7rPhxqXgKSkqECC0/AAFKanoQKBUVXYAIGp99ju4MIQVpEUFCCgUEpBRJFGT7hpmLZ3V3Pic2BUJs4dmZ+fbbudnZWQsRHaWKAyFbyXbXfUN5zr0U8nShLC4uDhBM0c/P1bXnJEXJdr76E/5p25QdLIMAn4sdQsrXocBoRx2yRnWalO3aVNDncwN412377cmgw58Howg52REOLQRBhVHa3mbQnj+dSF5o2c4sgLiQEOpKoZB5yfag1GA2+nkD6FeD+/YWh4fX2L6tpI/o6UPw9JeCC2KTZlXcSQJJKZ+NF7I61GQwFjqkBjQ/CgFLQVAQ4897jrGN4e8YShV3OZiauF39dKl85ig5EdyIA5HNBxalbKTU7iHUE1bFWYkD6wPI5U6vpJQcxQZw0LLdhShYA8mRyxnzSqlbAHDGqtSmo+A2HRmf0sehnGCnPlc2sMRSnBcA52RCpc2xzLvQ1gwi2ZeEra7U9B6RHgssAyQ36+Ib+ptmIXuqI9Cz3To5sZp0pbUxctJV3kgRmIdeQQZKNuYx0ZcSh7J4CAwiqYEIek/JpqRns8b3IIjm/tZW1XmIoLNCqQlKehREeotRLUsBU2Yu8yQO9I/ZylX3Dr0E0R7ca5jh8wFxRIA47IF3N1psvRC3FSa9Kz9W18tUlD6RlBtSSZOKs1viNlJeWHbdE1AHFzv24Ba5+DywK2Gk02mq2W1HR1JehfVzETwxg3qCbFLINzKfuUytgTFRuSMpL8ADfID5vs86kk+ZBeMe60HZNSktoisLVXeGHrEWSRMfs2vRx6wnUo7GcZyhX3Xh4rU6TjYk+cB9gfRwSZFlh0HVgYSzTIh/SzaSSt4OLuspUuqoILwbmgAv/3jMve6KlDoutunHTIaP6rSZN26yHpXbklpztVHwwMKL0E8LEbxwYP+ewsjIyNb/xChbS48lpYPYbIgaltAxn0yKFZmSRtEwPnXgCZlDpFQyXrX2AiM730I1VUJeLY4Zr0KrdlB0eyacV3W/UEOhOd73STNn6GIn2/83fgPFf0W2rAKXswAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="margin-set my-balence" @click="gotoBalence">
            <img width="20px" height="20px" src="data:image/png;base64,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" alt="">
            <span class="label">余额</span>
            <span class="value">
                <span class="price-decimal price-fmt">
                    <i>￥</i>
                    <span class="interge" style="font-size:15px">0</span>
                    <span style="display:none">.</span>
                    <span class="decimal" style="font-size:10px"></span>
                    <span style="display:none">.</span>
                    <span class="decimal" style="font-size:10px;display:none">00</span>
                </span>
            </span>
            <img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAAERNkEIAAAAAXNSR0IArs4c6QAAAyRJREFUSA3dVjtvE0EQ3l3bIiQggSBBggbxqFJEvBT7rPhxqXgKSkqECC0/AAFKanoQKBUVXYAIGp99ju4MIQVpEUFCCgUEpBRJFGT7hpmLZ3V3Pic2BUJs4dmZ+fbbudnZWQsRHaWKAyFbyXbXfUN5zr0U8nShLC4uDhBM0c/P1bXnJEXJdr76E/5p25QdLIMAn4sdQsrXocBoRx2yRnWalO3aVNDncwN412377cmgw58Howg52REOLQRBhVHa3mbQnj+dSF5o2c4sgLiQEOpKoZB5yfag1GA2+nkD6FeD+/YWh4fX2L6tpI/o6UPw9JeCC2KTZlXcSQJJKZ+NF7I61GQwFjqkBjQ/CgFLQVAQ4897jrGN4e8YShV3OZiauF39dKl85ig5EdyIA5HNBxalbKTU7iHUE1bFWYkD6wPI5U6vpJQcxQZw0LLdhShYA8mRyxnzSqlbAHDGqtSmo+A2HRmf0sehnGCnPlc2sMRSnBcA52RCpc2xzLvQ1gwi2ZeEra7U9B6RHgssAyQ36+Ib+ptmIXuqI9Cz3To5sZp0pbUxctJV3kgRmIdeQQZKNuYx0ZcSh7J4CAwiqYEIek/JpqRns8b3IIjm/tZW1XmIoLNCqQlKehREeotRLUsBU2Yu8yQO9I/ZylX3Dr0E0R7ca5jh8wFxRIA47IF3N1psvRC3FSa9Kz9W18tUlD6RlBtSSZOKs1viNlJeWHbdE1AHFzv24Ba5+DywK2Gk02mq2W1HR1JehfVzETwxg3qCbFLINzKfuUytgTFRuSMpL8ADfID5vs86kk+ZBeMe60HZNSktoisLVXeGHrEWSRMfs2vRx6wnUo7GcZyhX3Xh4rU6TjYk+cB9gfRwSZFlh0HVgYSzTIh/SzaSSt4OLuspUuqoILwbmgAv/3jMve6KlDoutunHTIaP6rSZN26yHpXbklpztVHwwMKL0E8LEbxwYP+ewsjIyNb/xChbS48lpYPYbIgaltAxn0yKFZmSRtEwPnXgCZlDpFQyXrX2AiM730I1VUJeLY4Zr0KrdlB0eyacV3W/UEOhOd73STNn6GIn2/83fgPFf0W2rAKXswAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="margin-set my-card">
            <img width="20px" height="20px" src="https://assets.maizuo.com/h5/v5/public/app/img/help.a9203368.png" alt="">
            <span class="label">帮助与客服</span>
            <img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAAERNkEIAAAAAXNSR0IArs4c6QAAAyRJREFUSA3dVjtvE0EQ3l3bIiQggSBBggbxqFJEvBT7rPhxqXgKSkqECC0/AAFKanoQKBUVXYAIGp99ju4MIQVpEUFCCgUEpBRJFGT7hpmLZ3V3Pic2BUJs4dmZ+fbbudnZWQsRHaWKAyFbyXbXfUN5zr0U8nShLC4uDhBM0c/P1bXnJEXJdr76E/5p25QdLIMAn4sdQsrXocBoRx2yRnWalO3aVNDncwN412377cmgw58Howg52REOLQRBhVHa3mbQnj+dSF5o2c4sgLiQEOpKoZB5yfag1GA2+nkD6FeD+/YWh4fX2L6tpI/o6UPw9JeCC2KTZlXcSQJJKZ+NF7I61GQwFjqkBjQ/CgFLQVAQ4897jrGN4e8YShV3OZiauF39dKl85ig5EdyIA5HNBxalbKTU7iHUE1bFWYkD6wPI5U6vpJQcxQZw0LLdhShYA8mRyxnzSqlbAHDGqtSmo+A2HRmf0sehnGCnPlc2sMRSnBcA52RCpc2xzLvQ1gwi2ZeEra7U9B6RHgssAyQ36+Ib+ptmIXuqI9Cz3To5sZp0pbUxctJV3kgRmIdeQQZKNuYx0ZcSh7J4CAwiqYEIek/JpqRns8b3IIjm/tZW1XmIoLNCqQlKehREeotRLUsBU2Yu8yQO9I/ZylX3Dr0E0R7ca5jh8wFxRIA47IF3N1psvRC3FSa9Kz9W18tUlD6RlBtSSZOKs1viNlJeWHbdE1AHFzv24Ba5+DywK2Gk02mq2W1HR1JehfVzETwxg3qCbFLINzKfuUytgTFRuSMpL8ADfID5vs86kk+ZBeMe60HZNSktoisLVXeGHrEWSRMfs2vRx6wnUo7GcZyhX3Xh4rU6TjYk+cB9gfRwSZFlh0HVgYSzTIh/SzaSSt4OLuspUuqoILwbmgAv/3jMve6KlDoutunHTIaP6rSZN26yHpXbklpztVHwwMKL0E8LEbxwYP+ewsjIyNb/xChbS48lpYPYbIgaltAxn0yKFZmSRtEwPnXgCZlDpFQyXrX2AiM730I1VUJeLY4Zr0KrdlB0eyacV3W/UEOhOd73STNn6GIn2/83fgPFf0W2rAKXswAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="margin-set system-set">
            <img width="20px" height="20px" src="data:image/png;base64,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" alt="">
            <span class="label">设置</span>
            <img class="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAAERNkEIAAAAAXNSR0IArs4c6QAAAyRJREFUSA3dVjtvE0EQ3l3bIiQggSBBggbxqFJEvBT7rPhxqXgKSkqECC0/AAFKanoQKBUVXYAIGp99ju4MIQVpEUFCCgUEpBRJFGT7hpmLZ3V3Pic2BUJs4dmZ+fbbudnZWQsRHaWKAyFbyXbXfUN5zr0U8nShLC4uDhBM0c/P1bXnJEXJdr76E/5p25QdLIMAn4sdQsrXocBoRx2yRnWalO3aVNDncwN412377cmgw58Howg52REOLQRBhVHa3mbQnj+dSF5o2c4sgLiQEOpKoZB5yfag1GA2+nkD6FeD+/YWh4fX2L6tpI/o6UPw9JeCC2KTZlXcSQJJKZ+NF7I61GQwFjqkBjQ/CgFLQVAQ4897jrGN4e8YShV3OZiauF39dKl85ig5EdyIA5HNBxalbKTU7iHUE1bFWYkD6wPI5U6vpJQcxQZw0LLdhShYA8mRyxnzSqlbAHDGqtSmo+A2HRmf0sehnGCnPlc2sMRSnBcA52RCpc2xzLvQ1gwi2ZeEra7U9B6RHgssAyQ36+Ib+ptmIXuqI9Cz3To5sZp0pbUxctJV3kgRmIdeQQZKNuYx0ZcSh7J4CAwiqYEIek/JpqRns8b3IIjm/tZW1XmIoLNCqQlKehREeotRLUsBU2Yu8yQO9I/ZylX3Dr0E0R7ca5jh8wFxRIA47IF3N1psvRC3FSa9Kz9W18tUlD6RlBtSSZOKs1viNlJeWHbdE1AHFzv24Ba5+DywK2Gk02mq2W1HR1JehfVzETwxg3qCbFLINzKfuUytgTFRuSMpL8ADfID5vs86kk+ZBeMe60HZNSktoisLVXeGHrEWSRMfs2vRx6wnUo7GcZyhX3Xh4rU6TjYk+cB9gfRwSZFlh0HVgYSzTIh/SzaSSt4OLuspUuqoILwbmgAv/3jMve6KlDoutunHTIaP6rSZN26yHpXbklpztVHwwMKL0E8LEbxwYP+ewsjIyNb/xChbS48lpYPYbIgaltAxn0yKFZmSRtEwPnXgCZlDpFQyXrX2AiM730I1VUJeLY4Zr0KrdlB0eyacV3W/UEOhOd73STNn6GIn2/83fgPFf0W2rAKXswAAAABJRU5ErkJggg==" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userInfo:[]
        }
    },
    created(){
        let jwt = this.$store.state.global._token
        if(jwt){
            this.$http.get('http://39.103.75.172:2004/backend/get_user_info').then(ret => {
                if(ret.error_code == 0){
                    this.userInfo = ret.data
                }
            })
        }
        
    },
    methods:{
         gotoLogin(){
             this.$router.push('/login')
         },
         gotoBalence(){
             this.$router.push('/balence')
         }
    }
}
</script>
<style lang="scss" scoped>
.center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
}
.center-view .avatar {
    text-align: center;
    margin-top: -44px;
    height: 135px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
}
.center-view .avatar .avator-icon {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    margin-right: 20px;
    border: 2px solid #fff;
}
.center-view .avatar .nick-name {
    font-size: 16px;
}
.center-view .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .my-order-tab li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
}
.center-view .my-card {
    position: relative;
}
.center-view .margin-set {
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .margin-set .label {
    margin-left: 15px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.center-view .margin-set .arrow {
    text-align: right;
    width: 6px;
    height: 10px;
}
.value {
    text-align: right;
    color: #797d82;
    padding-right: 14px;
}
.price-fmt i {
    font-size: 11px;
    font-style: normal;
}
</style>