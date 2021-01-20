let df_container = {
  template: `
  <div class="df-content">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane v-for="item in tabList" :label="item.label" :name="item.name">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="gender" label="性别" width="180">
          </el-table-column>
          <el-table-column prop="code" label="准考证号">
          </el-table-column>
          <el-table-column prop="subject" label="考试科目">
          </el-table-column>
          <el-table-column prop="examTime" label="考试时间">
          </el-table-column>
          <el-table-column prop="score" label="成绩">
          </el-table-column>
          <el-table-column prop="remark" label="备注">
          </el-table-column>
        </el-table>
        <el-pagination style="width:426px;" class="df-jfr" background layout="prev, pager, next" :total="1000" @current-change="handleChangePage">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
  `,
  props: {},
  data() {
    return {
      formInline: {},
      activeName: 'first',
      tabList: [{
        label: '零分卷',
        name: 'first'
      }, {
        label: '缺考卷',
        name: 'second'
      }, {
        label: '作弊卷',
        name: 'third'
      }],
      tableData: [{
        name: '王小虎',
        gender: '男',
        code: '202012121',
        subject: '物理',
        examTime: '2020/1205 09：45',
        score: '0分',
        remark: ''

      }, {
        name: '王小虎',
        gender: '男',
        code: '202012121',
        subject: '物理',
        examTime: '2020/1205 09：45',
        score: '0分',
        remark: ''

      }, {
        name: '王小虎',
        gender: '男',
        code: '202012121',
        subject: '物理',
        examTime: '2020/1205 09：45',
        score: '0分',
        remark: ''

      }, {
        name: '王小虎',
        gender: '男',
        code: '202012121',
        subject: '物理',
        examTime: '2020/1205 09：45',
        score: '0分',
        remark: ''

      }]
    }
  },
  created(){
    this.getList()
  },
  methods: {
    getList(){
      this.$bus.$on('query-info',(e)=>{
        console.log(e)
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChangePage(e){
      console.log(e)
    }
  }
}