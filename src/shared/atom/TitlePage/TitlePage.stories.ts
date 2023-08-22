import { Meta, StoryObj } from '@storybook/react';
import TitlePage from './index';

export default {
  title: 'Components/atoms/TitlePage',
  component: TitlePage,
  args: {
    children: 'Seja Bem-Vindo'
  }
} as Meta;


export const Default: StoryObj = {};