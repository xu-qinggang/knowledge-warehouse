<template>
  <div class="main">
    <el-row>
      <el-col :span="24">
        <div style="text-align:center">
          <div style="line-height:30px">
            <span>Es6变量与赋值</span>
          </div>
          <el-button type="primary" @click="letOrVar('let')">let</el-button>
          <el-button type="primary" @click="letOrVar('var')">var</el-button>
          <el-button type="primary" @click="variable('var')">map的for of</el-button>
          <div>
            <span>array1:[1,2,3] array2:[1,2,3]</span>
          </div>
          <div>
            <span style="color:green">结果</span>
            <span>{{arrayToStr}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrayToStr: "",
      array: [1, 2, 3]
    };
  },
  methods: {
    //var 与 char
    letOrVar(val) {
      switch (val) {
        case "let": {
          for (let i = 0; i < this.array.length; i++) {
            let b = 'abc'
            window.console.log(b)
            this.arrayToStr += this.array[i];
          }
          break;
        }
        case "var": {
          for (var x = 0; x < this.array.length; x++) {
            var y = 'abc'
            window.console.log(y, "var");
            this.arrayToStr += x;
          }
          break;
        }
      }
    },
    //变量的解构赋值
    variable(){
      const map = new Map();
      map.set(1,"飞天");
      map.set('sd','xiaonv');
      map.set('wiu','警');
      for(let [key,value] of map){
        console.log(key+ "==>" + value)
      }
    },
    test(...array){
      console.log(array,11)
    }
  },
  mounted(){
    // 字符的unicode表示
    window.console.log("\u5f90\u6e05\u521a")
    window.console.log("\u6551\u547d")
    // 字符串的遍历
    for(let i of 'help me!'){
      window.console.log(i,"字符串的遍历")
    }
    // ES6新语法 string的新方法
    let str1 = "hello world , i an a man"
    let str2 = "i an a"
    window.console.log(str1.includes(str2), "ES6新语法查看str2是否在str1中")
    let str3 = "hero"
    window.console.log(str3.repeat(3), "字符串重复n次 String.repeat()")
    let str4 = "do"
    window.console.log(str4.padStart(5,"0"),"字符串长度不满n,头部补上str至长度n String.padStart(n,str)")
    let str5 = "do"
    window.console.log(str5.padEnd(5,"0"),"字符串长度不满n,尾部补上str至长度n String.padEnd(n,str)")
    let str6 ="  str  "
    window.console.log(str6.length,str6.trimStart(),"String.trimStart()去除字符串头部空格",str6.trimStart().length)
    let str7 ="  str  "
    window.console.log(str6.length,str7.trimEnd(),"String.trimEnd()去除字符串尾部部空格",str7.trimEnd().length)
    // ES6 number的新方法
    let num1 = "123.44"
    window.console.log(Number.parseInt(num1),"将其他类型的数据转化为整型number Number.parseInt(value)")
    window.console.log(Number.parseFloat(num1),"将其他类型的数据转化为浮点型number Number.parseFloat(value)")
    // Math新增的方法
    window.console.log(Math.trunc(num1),"去除数字的小数部分Math.trunc(num)")
    window.console.log(Math.sign(num1),"判断数字是否是整数Math.sign(num)")
    window.console.log(Math.cbrt(-8),"计算数字的立方根 Math.cbrt(num)")
    let array = [1,2,3]
    let array_copy  = array
    array_copy.push(4)
    window.console.log(array,array_copy)
    let a2 = [...array]
    a2.push(5)
    window.console.log(a2,array)
    let [val1,val2,...val3] = [1,2,3,4,5,6,7]
    window.console.log("val1==>",val1,",val2==>",val2,",val3==>",...val3)
    let list =[1,2,3]
    let list1 = [3,4,5,6,7]
    let list2 = [...list,...list1]
    list2[2] =10
    window.console.log(list2,list2.push(8),list,list1)
    let strx = {
      s1:'sd',
      s2:'213',
    }
    let list3 = ["123","456",strx]
    let list4 = ["1234","3456","6789"]
    let list5 =[...list3,...list4]
    strx.s1 ="doubi"

    window.console.log(list5,list3,list4)
    this.test(...list5,list1)
    let list6 = [1,2,3,4,5,6,7,8]
    let list7 = [3,4,7,8,9,0,12]
    let set= new Set(...list6);
    window.console.log(set)
  }
};
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  background: whitesmoke;
}
</style>