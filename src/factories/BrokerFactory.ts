import config from '../config/config.json';
import {BrokerTemplate, ConfigTemplate} from '../interfaces/InterfaceCollection';

export const brokerFactory = async (): Promise<BrokerTemplate> => {
  const apiProvider = config.currentProvider;
  const settings: ConfigTemplate = config.providers[apiProvider as keyof typeof config.providers];
  const brokerClassName = settings.brokerClass;
  const BrokerClass = (await import(`../services/${brokerClassName}`)).default;

  return new BrokerClass(settings);
};