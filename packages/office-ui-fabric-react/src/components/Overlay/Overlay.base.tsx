import * as React from 'react';
import {
  BaseComponent,
  customizable,
  classNamesFunction,
  getNativeProps,
  divProperties,
  enableBodyScroll,
  disableBodyScroll
} from '../../Utilities';
import { IOverlayProps, IOverlayStyleProps, IOverlayStyles } from './Overlay.types';

const getClassNames = classNamesFunction<IOverlayStyleProps, IOverlayStyles>();

@customizable('Overlay', ['theme', 'styles'])
export class OverlayBase extends BaseComponent<IOverlayProps, {}> {
  public componentDidMount(): void {
    disableBodyScroll();
  }

  public componentWillUnmount(): void {
    enableBodyScroll();
  }

  public render(): JSX.Element {
    const { isDarkThemed: isDark, className, theme, styles } = this.props;

    const divProps = getNativeProps(this.props, divProperties);

    const classNames = getClassNames(styles!, {
      theme: theme!,
      className,
      isDark
    });

    return <div {...divProps} className={classNames.root} />;
  }
}
