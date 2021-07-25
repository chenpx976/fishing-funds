import * as Enums from '@/utils/enums';
import * as Utils from '@/utils';
import * as CONST from '@/constants';

export interface FundSortMode {
  type: Enums.FundSortType;
  order: Enums.SortOrderType;
}
export interface ZindexSortMode {
  type: Enums.ZindexSortType;
  order: Enums.SortOrderType;
}
export interface QuotationSortType {
  type: Enums.QuotationSortType;
  order: Enums.SortOrderType;
}

export interface StockSortType {
  type: Enums.StockSortType;
  order: Enums.SortOrderType;
}

export const fundSortModeOptions: Option.EnumsOption<Enums.FundSortType>[] = [
  { key: Enums.FundSortType.Custom, value: '自定义' },
  { key: Enums.FundSortType.Growth, value: '今日涨幅' },
  { key: Enums.FundSortType.Cost, value: '持有成本' },
  { key: Enums.FundSortType.Money, value: '今日收益' },
  { key: Enums.FundSortType.Estimate, value: '今日总值' },
  { key: Enums.FundSortType.Income, value: '持有收益' },
  { key: Enums.FundSortType.IncomeRate, value: '持有收益率' },
];

export const zindexSortModeOptions: Option.EnumsOption<Enums.ZindexSortType>[] = [
  { key: Enums.ZindexSortType.Custom, value: '自定义' },
  { key: Enums.ZindexSortType.Zdd, value: '涨跌点' },
  { key: Enums.ZindexSortType.Zdf, value: '涨跌幅' },
  { key: Enums.ZindexSortType.Zsz, value: '指数值' },
];

export const quotationSortModeOptions: Option.EnumsOption<Enums.QuotationSortType>[] = [
  { key: Enums.QuotationSortType.Zdf, value: '涨跌幅' },
  { key: Enums.QuotationSortType.Zde, value: '涨跌额' },
  { key: Enums.QuotationSortType.Zdd, value: '涨跌点' },
  { key: Enums.QuotationSortType.Zsz, value: '总市值' },
  { key: Enums.QuotationSortType.Zxj, value: '最新价' },
  { key: Enums.QuotationSortType.Szjs, value: '上涨家数' },
  { key: Enums.QuotationSortType.Xdjs, value: '下跌家数' },
];

export const stockSortModeOptions: Option.EnumsOption<Enums.StockSortType>[] = [
  { key: Enums.StockSortType.Custom, value: '自定义' },
  { key: Enums.StockSortType.Zdd, value: '涨跌点' },
  { key: Enums.StockSortType.Zdf, value: '涨跌幅' },
  { key: Enums.StockSortType.Zx, value: '最新值' },
];

export function GetSortConfig() {
  const fundSortModeOptionsMap = fundSortModeOptions.reduce((r, c) => {
    r[c.key] = c;
    return r;
  }, {} as Record<Enums.FundSortType, Option.EnumsOption<Enums.FundSortType>>);

  const zindexSortModeOptionsMap = zindexSortModeOptions.reduce((r, c) => {
    r[c.key] = c;
    return r;
  }, {} as Record<Enums.ZindexSortType, Option.EnumsOption<Enums.ZindexSortType>>);

  const quotationSortModeOptionsMap = quotationSortModeOptions.reduce((r, c) => {
    r[c.key] = c;
    return r;
  }, {} as Record<Enums.QuotationSortType, Option.EnumsOption<Enums.QuotationSortType>>);

  const stockSortModeOptionsMap = stockSortModeOptions.reduce((r, c) => {
    r[c.key] = c;
    return r;
  }, {} as Record<Enums.StockSortType, Option.EnumsOption<Enums.StockSortType>>);

  return {
    fundSortModeOptions,
    zindexSortModeOptions,
    quotationSortModeOptions,
    stockSortModeOptions,
    fundSortModeOptionsMap,
    zindexSortModeOptionsMap,
    quotationSortModeOptionsMap,
    stockSortModeOptionsMap,
  };
}

export function GetSortMode() {
  const fundSortMode: FundSortMode = Utils.GetStorage(CONST.STORAGE.FUND_SORT_MODE, {
    type: Enums.FundSortType.Custom,
    order: Enums.SortOrderType.Desc,
  });
  const zindexSortMode: ZindexSortMode = Utils.GetStorage(CONST.STORAGE.ZINDEX_SORT_MODE, {
    type: Enums.ZindexSortType.Custom,
    order: Enums.SortOrderType.Desc,
  });
  const quotationSortMode: QuotationSortType = Utils.GetStorage(CONST.STORAGE.QUOTATION_SORT_MODE, {
    type: Enums.QuotationSortType.Zdf,
    order: Enums.SortOrderType.Desc,
  });
  const stockSortMode: StockSortType = Utils.GetStorage(CONST.STORAGE.STOCK_SORT_MODE, {
    type: Enums.StockSortType.Custom,
    order: Enums.SortOrderType.Desc,
  });
  return { fundSortMode, zindexSortMode, quotationSortMode, stockSortMode };
}
