/*
 * Copyright 2021-2021 Monkey Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.monkey.mmq.config.service;

import org.monkey.mmq.config.config.Loggers;
import org.monkey.mmq.config.driver.DriverFactory;
import org.monkey.mmq.config.driver.MysqlDriver;
import org.monkey.mmq.config.matedata.KeyBuilder;
import org.monkey.mmq.config.matedata.UtilsAndCommons;
import org.monkey.mmq.config.matedata.ResourcesMateData;
import org.monkey.mmq.core.consistency.matedata.RecordListener;
import org.monkey.mmq.core.consistency.persistent.ConsistencyService;
import org.monkey.mmq.core.exception.MmqException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * Resources Service
 *
 * @author solley
 */
@Service
public class ResourcesService implements RecordListener<ResourcesMateData> {

    @Autowired
    MysqlDriver mysqlDriver;

    Map<String, ResourcesMateData> resourcesMateDataMap = new HashMap<>();

    @Resource(name = "configPersistentConsistencyServiceDelegate")
    private ConsistencyService consistencyService;

    /**
     * Init
     */
    @PostConstruct
    public void init() {
        try {
            consistencyService.listen(KeyBuilder.getResourcesKey(), this);
        } catch (MmqException e) {
            Loggers.CONFIG_SERVER.error("listen resources service failed.", e);
        }
    }

    public void save(String resourceID, ResourcesMateData resourcesMateData) {
        try {
            consistencyService.put(UtilsAndCommons.RESOURCES_STORE + resourceID, resourcesMateData);
        } catch (MmqException e) {
            Loggers.CONFIG_SERVER.error("save resources failed.", e);
        }
    }

    public void delete(String resourceID) {
        try {
            consistencyService.remove(UtilsAndCommons.RESOURCES_STORE + resourceID);
        } catch (MmqException e) {
            Loggers.CONFIG_SERVER.error("delete resources failed.", e);
        }
    }

    public Map<String, ResourcesMateData> getAllResources() {
        return resourcesMateDataMap;
    }

    public ResourcesMateData getResourcesByResourceID(String resourceID) {
        return resourcesMateDataMap.get(resourceID);
    }

    @Override
    public boolean interests(String key) {
        return KeyBuilder.matchResourcesKey(key);
    }

    @Override
    public boolean matchUnlistenKey(String key) {
        return KeyBuilder.matchResourcesKey(key);
    }

    @Override
    public void onChange(String key, ResourcesMateData value) throws Exception {
        resourcesMateDataMap.put(key, value);
        DriverFactory.getResourceDriverByEnum(value.getType()).init(value.getResource());
    }

    @Override
    public void onDelete(String key) throws Exception {
        resourcesMateDataMap.remove(key);
    }
}
