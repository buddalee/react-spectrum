import {cleanup} from '@testing-library/react';
import React from 'react';
import {renderHook} from 'react-hooks-testing-library';
import {useTooltip} from '../';

describe('useTooltip hook', function () {
  afterEach(cleanup);

  let renderTooltipHook = (props) => {
    let {result} = renderHook(() => useTooltip(props));
    return result.current;
  };

  it('with appropriate role', function () {
    let {tooltipProps} = renderTooltipHook({children: 'Test Tooltip'});
    expect(tooltipProps.role).toBe('tooltip');
  });

  it('should have an id', function () {
    let {tooltipProps} = renderTooltipHook({children: 'Test Tooltip'});
    expect(tooltipProps.id).toBeTruthy();
  });

});