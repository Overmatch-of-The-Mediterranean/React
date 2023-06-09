import React, { PureComponent } from 'react'
import logRenderTime from '../hoc/log_render_time'

export class Detail extends PureComponent {
  render() {
    return (
      <div>
        <h2>Detail</h2>
        <ul>
            <li>101</li>
            <li>102</li>
            <li>103</li>
            <li>104</li>
            <li>105</li>
            <li>106</li>
            <li>107</li>
            <li>108</li>
            <li>109</li>
            <li>1010</li>
        </ul>

      </div>
    )
  }
}

export default  logRenderTime(Detail)
