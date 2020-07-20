
import React from 'react';
import { observer } from 'mobx-react';
import { Link, useHistory } from 'react-router-dom';
import { useStores } from '../../stores';

const Test = observer(() => {
  const {
    authStatus,
    userInfo,
  } = useStores();

  const history = useHistory();

  return (
    <React.Fragment>
      <h1>LOGIN</h1>
      <Link
        to='/'
      >
        <span>landing</span>
      </Link>
      <br/>
      <button
        onClick={() => {
          authStatus.authenticate({
            token: 'some_token_provided_by_backend',
            role: 'regular',
          });
          userInfo.update({
            accessGroup: 'regular',
            status: 1,
            accessLevel: 2,
          });
          history.goBack();
        }}
      >
        login
      </button>
    </React.Fragment>
  );
});

export default Test;
