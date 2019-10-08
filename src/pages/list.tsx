import React, { Fragment } from "react";
import { Table, Icon, Input, Select, DatePicker, Button } from "antd";
import AreticleList from "../models/ArticleList";
import { ColumnProps } from "antd/es/table";

import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;
export interface ListProps {}

export interface ListState {
  list: Array<AreticleList>;
  pageSize: number;
  pageNum: number;
  total: number;
}

class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      list: [],
      pageSize: 10,
      pageNum: 1,
      total: 0
    };
  }

  changePageSize(pageSize: number, current: number) {}

  changePage(current: number) {}

  deleteArticle(index: number): void {
    let list = this.state.list;
    list.splice(index, 1);

    this.setState({
      list
    });
  }

  editArticle(id: number): void {}

  componentDidMount() {
    const data = [
      {
        title: "文章标题1",
        content: "这是文章1的内容",
        view_count: 10,
        like_count: 10,
        comment_count: 5,
        create_time: "2019-10-8 16:00:00"
      },
      {
        title: "文章标题2",
        content: "这是文章2的内容",
        view_count: 10,
        like_count: 10,
        comment_count: 5,
        create_time: "2019-10-8 16:00:00"
      },
      {
        title: "文章标题3",
        content: "这是文章3的内容",
        view_count: 10,
        like_count: 10,
        comment_count: 5,
        create_time: "2019-10-8 16:00:00"
      }
    ];

    this.setState({
      list: data
    });
  }

  render() {
    const columns: ColumnProps<AreticleList>[] = [
      {
        title: "标题",
        dataIndex: "title",
        key: "title",
        render: (title: string): any => <span>{title}</span>
      },
      {
        title: "内容",
        dataIndex: "content",
        key: "content",
        render: (content: string): any => <span>{content}</span>
      },
      {
        title: "浏览数",
        dataIndex: "view_count",
        key: "view_count",
        align: "center",
        render: (count: number): any => <span>{count}</span>
      },
      {
        title: "点赞数",
        dataIndex: "like_count",
        key: "like_count",
        align: "center",
        render: (count: number): any => <span>{count}</span>
      },
      {
        title: "评论",
        dataIndex: "comment_count",
        key: "comment_count",
        align: "center",
        render: (count: number): any => <span>{count}</span>
      },
      {
        title: "发表时间",
        dataIndex: "create_time",
        key: "create_time",
        align: "center",
        render: (time: string): any => <span>{time}</span>
      },
      {
        title: "操作",
        key: "opreation",
        align: "center",
        render: (text: string, record: any, index: number) => (
          <span>
            <Icon
              type="delete"
              title="删除"
              className="table-handle__icon"
              onClick={this.deleteArticle.bind(this, index)}
            />
            <Icon
              type="form"
              title="编辑"
              className="table-handle__icon"
              onClick={this.editArticle.bind(this, index)}
            />
          </span>
        )
      }
    ];


    const paginationProps = {
        showSizeChanger: true,
        showQuickJumper: false,
        showTotal: () => `共${this.state.list.length}条`,
        pageSize: this.state.pageSize,
        current: this.state.pageNum,
        total: this.state.total,
        onShowSizeChange: (current:number, pageSize:number) => this.changePageSize(pageSize, current),
        onChange: (current:number) => this.changePage(current)
    };

    return (
      <>
        <div className="filter-pannel">
          <Input
            placeholder="关键字"
            className="filter-condition"
            style={{ width: 200 }}
          />
          <RangePicker separator="-" className="filter-condition" />
          <Select
            defaultValue="lucy"
            className="filter-condition"
            style={{ width: 200 }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Button type="primary" className="filter-search__btn">
            搜索
          </Button>
        </div>
        <div className="content-main__hasfilter">
          <Table
            columns={columns}
            dataSource={this.state.list}
            pagination={paginationProps}
          />
        </div>
      </>
    );
  }
}

export default List;
