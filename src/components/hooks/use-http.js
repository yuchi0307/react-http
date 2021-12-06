import{useState} from 'react';

const useHttp = () =>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfig, applyData) => {
      //把發送 request 的要素包成物件 requestConfig 進來這個hook
      //applyData 則為function，用以處理 server 回傳的資料
    setIsLoading(true);
    setError(null);
    try { const response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.header ? requestConfig.header : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null 
        });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
      
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };
  //custom hook可以回傳任一型態的資料
  return{
    isLoading: isLoading, //左邊為attribute, 右邊為值
    error: error,
    sendRequest: sendRequest //回傳整個function
  }
  /*
  in modern js can write as below:
  return{
      isLoading,
      error,
      sendRequest
  } */
}

export default useHttp;