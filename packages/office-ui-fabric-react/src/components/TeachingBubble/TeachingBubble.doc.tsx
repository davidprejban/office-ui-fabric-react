import * as React from 'react';
import { TeachingBubbleBasicExample } from './examples/TeachingBubble.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { TeachingBubbleCondensedExample } from './examples/TeachingBubble.Condensed.Example';
import { TeachingBubbleIllustrationExample } from './examples/TeachingBubble.Illustration.Example';
import { TeachingBubbleWideIllustrationExample } from './examples/TeachingBubble.WideIllustration.Example';
import { TeachingBubbleSmallHeadlineExample } from './examples/TeachingBubble.SmallHeadline.Example';
import { TeachingBubbleStatus } from './TeachingBubble.checklist';

const TeachingBubbleBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Basic.Example.tsx') as string;
const TeachingBubbleCondensedExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Condensed.Example.tsx') as string;
const TeachingBubbleIllustrationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.Basic.Example.tsx') as string;
const TeachingBubbleWideIllustrationExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.WideIllustration.Example.tsx') as string;
const TeachingBubbleSmallHeadlineExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/examples/TeachingBubble.SmallHeadline.Example.tsx') as string;

export const TeachingBubblePageProps: IDocPageProps = {
  title: 'TeachingBubble',
  componentName: 'TeachingBubble',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/TeachingBubble',
  componentStatus: TeachingBubbleStatus,
  examples: [
    {
      title: 'TeachingBubble',
      code: TeachingBubbleBasicExampleCode,
      view: <TeachingBubbleBasicExample />
    },
    {
      title: 'TeachingBubble Condensed',
      code: TeachingBubbleCondensedExampleCode,
      view: <TeachingBubbleCondensedExample />
    },
    {
      title: 'TeachingBubble with Illustration',
      code: TeachingBubbleIllustrationExampleCode,
      view: <TeachingBubbleIllustrationExample />
    },
    {
      title: 'TeachingBubble wide with Illustration',
      code: TeachingBubbleWideIllustrationExampleCode,
      view: <TeachingBubbleWideIllustrationExample />
    },
    {
      title: 'TeachingBubble with small headline',
      code: TeachingBubbleSmallHeadlineExampleCode,
      view: <TeachingBubbleSmallHeadlineExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/TeachingBubble.types.ts')
  ],
  overview: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/TeachingBubble/docs/TeachingBubbleOverview.md'),
  isHeaderVisible: true
};
