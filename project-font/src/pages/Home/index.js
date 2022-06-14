import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import Store from './store';

import './style.less';

const HomePage = () => {
  // useContext 订阅mobx数据
  const pageStore = useContext(Store);
  // useState state状态
  const [num, setNum] = useState(0);
  // useEffect副作用
  useEffect(() => {
    pageStore.qryTableDate();
  }, []);

  return (
    <div className="page-home page-content">
      <h2>{pageStore.pageTitle}</h2>
      <div>
        1、学生信息查询
        2、近期考试安排
        3、已完成的考试
        4、考试成绩分析
      </div>
    </div>
  );
};

export default observer(HomePage);
