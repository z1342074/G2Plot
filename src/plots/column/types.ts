import { ShapeAttrs } from '@antv/g2';
import { BrushCfg, Options, StyleAttr } from '../../types';
import { OptionWithConversionTag } from '../../adaptor/conversion-tag';
import { OptionWithConnectedArea } from '../../adaptor/connected-area';
import { IntervalGeometryOptions } from '../../adaptor/geometries/interval';

type PartialIntervalGeometryOptions = Pick<IntervalGeometryOptions, 'dodgePadding' | 'intervalPadding'>;

export interface ColumnOptions
  extends Options,
    OptionWithConversionTag,
    OptionWithConnectedArea,
    PartialIntervalGeometryOptions {
  /** x 轴字段 */
  readonly xField: string;
  /** y 轴字段 */
  readonly yField: string;
  /** 拆分字段 */
  readonly seriesField?: string;
  /** 是否分组柱形图 */
  readonly isGroup?: boolean;
  /** 是否是区间柱状图 */
  readonly isRange?: boolean;
  /** 是否是百分比柱状图 */
  readonly isPercent?: boolean;
  /** 是否堆积柱状图 */
  readonly isStack?: boolean;
  /** 柱状图宽度占比 [0-1] */
  readonly columnWidthRatio?: number;
  /** 分组中柱子之间的间距 [0-1]，仅对分组柱状图适用 */
  readonly marginRatio?: number;
  /** 柱状图最小宽度（像素） */
  readonly minColumnWidth?: number;
  /** 柱状图最大宽度（像素） */
  readonly maxColumnWidth?: number;
  /** 柱状图柱子的背景 */
  readonly columnBackground?: { style?: ShapeAttrs };
  /** 柱子样式配置，可选 */
  readonly columnStyle?: StyleAttr;
  /** 分组字段，优先级高于 seriesField , isGroup: true 时会根据 groupField 进行分组。*/
  readonly groupField?: string;

  // 自定义相关
  /** 自定义柱状图 interval 图形元素展示形状 */
  readonly shape?: string;

  // 图表交互
  /** 开启下钻交互，以及进行下钻交互的配置 */
  readonly brush?: BrushCfg;
}
