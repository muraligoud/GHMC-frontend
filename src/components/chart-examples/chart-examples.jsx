import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

import './chart-examples.css'

const DemoPie = () => {
  const data = [
    {
      type: 'Category 1',
      value: 27,
    },
    {
      type: 'Category 2',
      value: 25,
    },
    {
      type: 'Category 3',
      value: 18,
    },
    {
      type: 'Category 4',
      value: 15,
    },
    {
      type: 'Category 5',
      value: 10,
    },
    {
      type: 'Category 6',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie className='pie-chart' {...config} />;
};
export default DemoPie