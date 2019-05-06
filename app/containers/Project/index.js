/**
 *
 * Project
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Input from 'components/InputBox';
import { BounceLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-grid-system';

import { changeImageName, getImages } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProject from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Project(props) {
  useInjectReducer({ key: 'project', reducer });
  useInjectSaga({ key: 'project', saga });

  const onChangeInput = e => {
    const text = e.target.value;
    props.dispatch(changeImageName(text));
    props.dispatch(getImages(text));
  };

  const { input, images, loading } = props.project;
  return (
    <div className="app">
      <div className="input_container">
        <Input onChange={onChangeInput} value={input} />
      </div>

      <div className="image_container">
        {loading ? (
          <div className="loader">
            <BounceLoader />
          </div>
        ) : images.length === 0 ? (
          <div className="loader">PLEASE ENTER</div>
        ) : (
          <div className="images">
            <Container>
              <Row>
                {images.map(image => (
                  <Col sm={6}>
                    <img src={image} alt="" className="image" />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}

Project.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  project: makeSelectProject(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Project);
