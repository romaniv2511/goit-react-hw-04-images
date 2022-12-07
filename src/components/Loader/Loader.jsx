import { LoaderBox } from './Loader.styles';
import { Dna } from 'react-loader-spinner';

export const Loader = () => (
  <LoaderBox>
    <Dna
      visible={true}
      height="120"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </LoaderBox>
);
