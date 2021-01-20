let search_bar = {
  template: `
  <div class="df-searchbar">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="year" placeholder="请选择">
          <el-option v-for="item in yearList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="exam" placeholder="请选择">
          <el-option v-for="item in examList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    <el-form-item>
      <el-input v-model="keywords" placeholder="输入考试关键字"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleQuery">查询</el-button>
    </el-form-item>
  </el-form>
</div>
  `,
  props: {},
  data() {
    return {
      year: new Date().getFullYear(),
      exam: 0,
      keywords: '',
      yearList: [{
        value: 2019,
        label: '2019年'
      }, {
        value: 2020,
        label: '2020年'
      }, {
        value: 2021,
        label: '2021年'
      }],
      examList: [{
        value: 0,
        label: '期末理化生实验操作考试'
      }, {
        value: 1,
        label: '期末理化生实验操作考试1'
      }, {
        value: 2,
        label: '期末理化生实验操作考试2'
      }],
    }
  },
  watch: {
    year(val) {
      console.log(val)
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {

    },
    handleQuery() {
      this.$bus.$emit('query-info', [this.year, this.exam, this.keywords])
      console.log(`${this.year},${this.exam},${this.keywords}`)
    }
  },

}