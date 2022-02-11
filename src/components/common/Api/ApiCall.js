import React from 'react';
import instance from './index';

export const ApiCall = (method = 'get', url, data = '') => {
    return instance.request({
        method: method,
        url: url,
        data: data
      })
    
}
