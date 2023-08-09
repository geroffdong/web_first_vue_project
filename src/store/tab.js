export default {
    state:{
        isCollapse:false,//控制菜单的展开还是收起
        tabsList:[
                {
                    path: "/",
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home",
                  },
        ]//面包屑的数组
    },
    mutations:{
     //修改菜单展开收起的方法
     collapseMenu(state) {
        state.isCollapse = !state.isCollapse
     },
     selectMenu(state,val){
        console.log(val,'val');
        if (val.name!=='home'){
           const index= state.tabsList.findIndex(item=>item.name===val.name)
           if(index===-1){
            state.tabsList.push(val)
           }
        }

     },
     //删除指定的数据
     closeTag(state,item){
        console.log(item,'item');
        const index =state.tabsList.findIndex(val=>val.name===item.name)
        state.tabsList.splice(index,1)


     }
    }
}
