/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  get(key: string): Promise<string | undefined | null>;
  set(key: string, value: string): Promise<void>;
  clear(key: string): Promise<void>;
  getMultiple(keys: string[]): Promise<string[]>;
  setMultiple(data: {}): Promise<void>;
  clearMultiple(keys: string[]): Promise<void>;
  getAll(): Promise<{}>;
  clearAll(): Promise<void>;
  getName(): Promise<string>;
  setName(name: string): Promise<void>;
} 
export default TurboModuleRegistry.get<Spec>('DefaultPreferenceNativeModule') as Spec | null;