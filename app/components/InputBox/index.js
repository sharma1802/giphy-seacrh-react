/**
 *
 * InputBox
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function InputBox({ onChange, value, type }) {
  return <input onChange={onChange} value={value} type={type} />;
}

export default memo(InputBox);
