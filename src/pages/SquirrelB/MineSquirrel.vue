<template>
    <div class="squirrel_mine">
        <div class="squirrel_sign">
            <p>我的松鼠币</p>
            <div class="squirrel_B">{{ squirrelB }}</div>
            <p>连续签到 <span class="green">{{count}}</span> 天  主人明天再来试试运气</p>
            <button>赚松鼠币</button>
        </div>
        <div class="squirrel_convert">
            <div class="convert_left">
                <h3>购物袋</h3>
                <p>想要的都在这儿</p>
            </div>
            <div class="convert_right">
                <h3>我的兑换</h3>
                <p>查看松鼠币兑换订单</p>
            </div>
        </div>
        <div class="sign">
            已签到
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count: 1,
            squirrelB: 78
        }
    },
    methods(){

    }
}
</script>

<style lang="less">
    .green{
        color: #77bc1f;
    }
    .squirrel_mine{
        width: 100%;
        height: 4.5rem;
        position: relative;
        .squirrel_sign{
            width: 80%;
            margin: 0 auto;
            text-align: center;
            height: 3.2rem;
            font-size: 14px;
            .squirrel_B{
                font-size: 38px;
                color: #ff9601;
                padding-bottom: .3rem;
            }
            .squirrel_B::after{
                position: absolute;
                background-color: #757575;
                top: 37%;
                width: 70px;
                margin: 0 auto;
                height: 5px;
                right: 0;
                bottom: 0;
                left: 0;
                border-radius: 50%;
                content: '';
                webkit-filter: blur(3px);
                filter: blur(3px);
                opacity: .3;
            }
            p{
                line-height: .7rem;
                font-weight: 600;
            }
            button{
                font-size: 16px;
                border-radius: 20px;
                background-color: #77bc1f;
                color: #fff;
                padding: 5px 20px;
            }
        }
        .squirrel_convert{
            border-top: 1px solid #ddd;
            width: 100%;
            height: 1.3rem;
            .convert_left,.convert_right{
                box-sizing:border-box;
                width: 50%;
                height: 1.3rem;
                float: left;
                font-size: 14px;
                background: url(http://m.3songshu.com/resources/images/icon-bag@2x.cbfb82c6.png) no-repeat .3rem center;
                background-size: .8rem;
                padding:.4rem 0 0 1.2rem;
                border-right: 1px solid #ddd;
                h3{
                    width: 70%;
                }
                p{
                    color: #999;
                }
            }
            .convert_right{
                float: right;
                border: none;
                background: url(http://m.3songshu.com/resources/images/icon-change-list@2x.92d60251.png) no-repeat .3rem center;
                background-size: .8rem;
            }
        }
        .sign{
            position: absolute;
            top: 1rem;
            right: 0;
            font-size: 14px;
            background-color: #77bc1f;
            color: #fff;
            padding: .05rem .15rem;
            border-radius: 10px 0 0 10px;
        }
    }
</style>
