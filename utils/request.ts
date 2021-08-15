import { extend } from 'umi-request';
import { toast } from 'react-toastify';

interface ResponseError<D = any> extends Error {
  name: string;
  data: D;
  response: Response;
}

const codeMessage: { [status: number]: string } = {
  200: 'The server successfully returned the requested data. Validating response data...',
  201: 'Create or modify data successfully',
  202: 'A request has entered the background queue (asynchronous task)',
  204: 'The data was deleted successfully',
  400: 'The request was sent with an error. The server did not perform any operations to create or modify data',
  401: 'The user does not have permission (token, username, password is incorrect)',
  403: 'User is authorized, but access is forbidden',
  404: 'The request sent is for a record that does not exist and the server is not operating',
  406: 'Not Acceptable',
  410: 'The requested resource is permanently deleted and will not be obtained again',
  422: 'When creating an object, a validation error occurred',
  500: 'The server has an error. Please check the server',
  502: 'Gateway error',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained',
  504: 'The gateway timed out',
};

const errorHandler = (error: ResponseError) => {
  const { response = {} as Response } = error;
  if (response && response.status) {
    const { status, statusText } = response;

    const errorText = codeMessage[status] || statusText;

    toast.error(errorText, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (!response) {
    toast.error(
      'Your network is abnormal and you cannot connect to the server',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }
  return response;
};

const umiRequest = extend({
  errorHandler,
  credentials: 'same-origin',
});

const request = async (url: string, options: any = {}) => {
  const { isServer, ...restOptions } = options;
  const isProd = process.env.NODE_ENV === 'production';
  return umiRequest(url, {
    ...restOptions,
    prefix: (isServer || isProd) && process.env.API_URL,
  });
};

export default request;
