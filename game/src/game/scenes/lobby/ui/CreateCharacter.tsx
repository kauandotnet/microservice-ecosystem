import React, { Component } from 'react';
import { Network }          from '../../../network';
import { Button }           from '@material-ui/core';
import './CreateCharacter.scss';
import Panel                from '../../../ui/Panel';

export interface CreateCharacterProps {
  network: Network
  toCharacters: () => void
}

export default class CreateCharacter extends Component<CreateCharacterProps, any> {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return <>
      <Panel title="Create Character" canDrag={true}>
        <Button type="button" onClick={this.props.toCharacters}>
          Go Back
        </Button>
      </Panel>
    </>;
  }
}
