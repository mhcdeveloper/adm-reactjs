import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import ReactSelect, { Props as ReactSelectProps } from "react-select";

import { Container, Error } from './styles';

interface Props extends ReactSelectProps {
  name: string;
}

const AsyncSelect: React.FC<Props> = ({ name, ...rest }) => {
  const { fieldName, registerField, error } = useField(name);
  const selectRef = useRef(null);
 
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => ref.state.value,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
      <Container>
          <ReactSelect ref={selectRef} {...rest} />
          { error && <Error>{error}</Error>}
      </Container>
  );
};

export default AsyncSelect;
