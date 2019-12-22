<template>
  <div>
    <div id="one" style="height:500px;width:500px;"></div>
  </div>
</template>

<script>
import $ from 'jquery'
var echarts = require('echarts');
require('echarts-wordcloud')
export default {
  
  methods:{
    draw(){
      var chart=echarts.init(document.getElementById("one"));
      $.ajax({
        url:"./json/poet.json",
        type:'get',
        dataType:'json',
        success:function(result){
          var x=[]
          var y=[]
          
          var poet=[]
          result.forEach(function(vl){
            
            if(vl.star>=100)
            {
              var one={name:null,value:null}
              one.name=vl.name
              one.value=vl.star
              poet.push(one)
            }
          })
          console.log(poet)

          chart.setOption({
            tooltip:{
              textStyle:{
                align:'left'
              },
              formatter:function(params){
                return '<p>'+params.name+'的点赞数为：'+params.value+'</p>'
              }
            },
            series:[{
              type:'wordCloud',
              shape:'circle',
              left:'center',
              top:'center',
              width:'100%',
              height: '100%',
              right: 'center',
              bottom: 'center',
              sizeRange: [12, 60],
              rotationRange: [-90, 90],
              rotationStep: 45,
              gridSize: 8,
              textStyle: {
                normal: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    // Color can be a callback function or a color string
                    color: function () {
                        // Random color
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                  },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                  }
                },
              data:poet
            }]
          })
        }
      })
    }
  },
  mounted(){
    this.draw();
  }

}
</script>

<style lang="stylus" scoped>

</style>