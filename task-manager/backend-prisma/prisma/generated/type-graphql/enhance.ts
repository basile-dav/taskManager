import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Users: crudResolvers.UsersCrudResolver,
  Actions: crudResolvers.ActionsCrudResolver,
  Notifications: crudResolvers.NotificationsCrudResolver,
  Tasks: crudResolvers.TasksCrudResolver,
  Comments: crudResolvers.CommentsCrudResolver,
  Assignees: crudResolvers.AssigneesCrudResolver
};
const actionResolversMap = {
  Users: {
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    createOneUsers: actionResolvers.CreateOneUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    deleteOneUsers: actionResolvers.DeleteOneUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findFirstUsersOrThrow: actionResolvers.FindFirstUsersOrThrowResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findUniqueUsersOrThrow: actionResolvers.FindUniqueUsersOrThrowResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    updateOneUsers: actionResolvers.UpdateOneUsersResolver,
    upsertOneUsers: actionResolvers.UpsertOneUsersResolver
  },
  Actions: {
    aggregateActions: actionResolvers.AggregateActionsResolver,
    createManyActions: actionResolvers.CreateManyActionsResolver,
    createOneActions: actionResolvers.CreateOneActionsResolver,
    deleteManyActions: actionResolvers.DeleteManyActionsResolver,
    deleteOneActions: actionResolvers.DeleteOneActionsResolver,
    findFirstActions: actionResolvers.FindFirstActionsResolver,
    findFirstActionsOrThrow: actionResolvers.FindFirstActionsOrThrowResolver,
    findManyActions: actionResolvers.FindManyActionsResolver,
    findUniqueActions: actionResolvers.FindUniqueActionsResolver,
    findUniqueActionsOrThrow: actionResolvers.FindUniqueActionsOrThrowResolver,
    groupByActions: actionResolvers.GroupByActionsResolver,
    updateManyActions: actionResolvers.UpdateManyActionsResolver,
    updateOneActions: actionResolvers.UpdateOneActionsResolver,
    upsertOneActions: actionResolvers.UpsertOneActionsResolver
  },
  Notifications: {
    aggregateNotifications: actionResolvers.AggregateNotificationsResolver,
    createManyNotifications: actionResolvers.CreateManyNotificationsResolver,
    createOneNotifications: actionResolvers.CreateOneNotificationsResolver,
    deleteManyNotifications: actionResolvers.DeleteManyNotificationsResolver,
    deleteOneNotifications: actionResolvers.DeleteOneNotificationsResolver,
    findFirstNotifications: actionResolvers.FindFirstNotificationsResolver,
    findFirstNotificationsOrThrow: actionResolvers.FindFirstNotificationsOrThrowResolver,
    findManyNotifications: actionResolvers.FindManyNotificationsResolver,
    findUniqueNotifications: actionResolvers.FindUniqueNotificationsResolver,
    findUniqueNotificationsOrThrow: actionResolvers.FindUniqueNotificationsOrThrowResolver,
    groupByNotifications: actionResolvers.GroupByNotificationsResolver,
    updateManyNotifications: actionResolvers.UpdateManyNotificationsResolver,
    updateOneNotifications: actionResolvers.UpdateOneNotificationsResolver,
    upsertOneNotifications: actionResolvers.UpsertOneNotificationsResolver
  },
  Tasks: {
    aggregateTasks: actionResolvers.AggregateTasksResolver,
    createManyTasks: actionResolvers.CreateManyTasksResolver,
    createOneTasks: actionResolvers.CreateOneTasksResolver,
    deleteManyTasks: actionResolvers.DeleteManyTasksResolver,
    deleteOneTasks: actionResolvers.DeleteOneTasksResolver,
    findFirstTasks: actionResolvers.FindFirstTasksResolver,
    findFirstTasksOrThrow: actionResolvers.FindFirstTasksOrThrowResolver,
    findManyTasks: actionResolvers.FindManyTasksResolver,
    findUniqueTasks: actionResolvers.FindUniqueTasksResolver,
    findUniqueTasksOrThrow: actionResolvers.FindUniqueTasksOrThrowResolver,
    groupByTasks: actionResolvers.GroupByTasksResolver,
    updateManyTasks: actionResolvers.UpdateManyTasksResolver,
    updateOneTasks: actionResolvers.UpdateOneTasksResolver,
    upsertOneTasks: actionResolvers.UpsertOneTasksResolver
  },
  Comments: {
    aggregateComments: actionResolvers.AggregateCommentsResolver,
    createManyComments: actionResolvers.CreateManyCommentsResolver,
    createOneComments: actionResolvers.CreateOneCommentsResolver,
    deleteManyComments: actionResolvers.DeleteManyCommentsResolver,
    deleteOneComments: actionResolvers.DeleteOneCommentsResolver,
    findFirstComments: actionResolvers.FindFirstCommentsResolver,
    findFirstCommentsOrThrow: actionResolvers.FindFirstCommentsOrThrowResolver,
    findManyComments: actionResolvers.FindManyCommentsResolver,
    findUniqueComments: actionResolvers.FindUniqueCommentsResolver,
    findUniqueCommentsOrThrow: actionResolvers.FindUniqueCommentsOrThrowResolver,
    groupByComments: actionResolvers.GroupByCommentsResolver,
    updateManyComments: actionResolvers.UpdateManyCommentsResolver,
    updateOneComments: actionResolvers.UpdateOneCommentsResolver,
    upsertOneComments: actionResolvers.UpsertOneCommentsResolver
  },
  Assignees: {
    aggregateAssignees: actionResolvers.AggregateAssigneesResolver,
    createManyAssignees: actionResolvers.CreateManyAssigneesResolver,
    createOneAssignees: actionResolvers.CreateOneAssigneesResolver,
    deleteManyAssignees: actionResolvers.DeleteManyAssigneesResolver,
    deleteOneAssignees: actionResolvers.DeleteOneAssigneesResolver,
    findFirstAssignees: actionResolvers.FindFirstAssigneesResolver,
    findFirstAssigneesOrThrow: actionResolvers.FindFirstAssigneesOrThrowResolver,
    findManyAssignees: actionResolvers.FindManyAssigneesResolver,
    findUniqueAssignees: actionResolvers.FindUniqueAssigneesResolver,
    findUniqueAssigneesOrThrow: actionResolvers.FindUniqueAssigneesOrThrowResolver,
    groupByAssignees: actionResolvers.GroupByAssigneesResolver,
    updateManyAssignees: actionResolvers.UpdateManyAssigneesResolver,
    updateOneAssignees: actionResolvers.UpdateOneAssigneesResolver,
    upsertOneAssignees: actionResolvers.UpsertOneAssigneesResolver
  }
};
const crudResolversInfo = {
  Users: ["aggregateUsers", "createManyUsers", "createOneUsers", "deleteManyUsers", "deleteOneUsers", "findFirstUsers", "findFirstUsersOrThrow", "findManyUsers", "findUniqueUsers", "findUniqueUsersOrThrow", "groupByUsers", "updateManyUsers", "updateOneUsers", "upsertOneUsers"],
  Actions: ["aggregateActions", "createManyActions", "createOneActions", "deleteManyActions", "deleteOneActions", "findFirstActions", "findFirstActionsOrThrow", "findManyActions", "findUniqueActions", "findUniqueActionsOrThrow", "groupByActions", "updateManyActions", "updateOneActions", "upsertOneActions"],
  Notifications: ["aggregateNotifications", "createManyNotifications", "createOneNotifications", "deleteManyNotifications", "deleteOneNotifications", "findFirstNotifications", "findFirstNotificationsOrThrow", "findManyNotifications", "findUniqueNotifications", "findUniqueNotificationsOrThrow", "groupByNotifications", "updateManyNotifications", "updateOneNotifications", "upsertOneNotifications"],
  Tasks: ["aggregateTasks", "createManyTasks", "createOneTasks", "deleteManyTasks", "deleteOneTasks", "findFirstTasks", "findFirstTasksOrThrow", "findManyTasks", "findUniqueTasks", "findUniqueTasksOrThrow", "groupByTasks", "updateManyTasks", "updateOneTasks", "upsertOneTasks"],
  Comments: ["aggregateComments", "createManyComments", "createOneComments", "deleteManyComments", "deleteOneComments", "findFirstComments", "findFirstCommentsOrThrow", "findManyComments", "findUniqueComments", "findUniqueCommentsOrThrow", "groupByComments", "updateManyComments", "updateOneComments", "upsertOneComments"],
  Assignees: ["aggregateAssignees", "createManyAssignees", "createOneAssignees", "deleteManyAssignees", "deleteOneAssignees", "findFirstAssignees", "findFirstAssigneesOrThrow", "findManyAssignees", "findUniqueAssignees", "findUniqueAssigneesOrThrow", "groupByAssignees", "updateManyAssignees", "updateOneAssignees", "upsertOneAssignees"]
};
const argsInfo = {
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  CreateOneUsersArgs: ["data"],
  DeleteManyUsersArgs: ["where"],
  DeleteOneUsersArgs: ["where"],
  FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUsersOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUsersArgs: ["where"],
  FindUniqueUsersOrThrowArgs: ["where"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUsersArgs: ["data", "where"],
  UpdateOneUsersArgs: ["data", "where"],
  UpsertOneUsersArgs: ["where", "create", "update"],
  AggregateActionsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyActionsArgs: ["data", "skipDuplicates"],
  CreateOneActionsArgs: ["data"],
  DeleteManyActionsArgs: ["where"],
  DeleteOneActionsArgs: ["where"],
  FindFirstActionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstActionsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueActionsArgs: ["where"],
  FindUniqueActionsOrThrowArgs: ["where"],
  GroupByActionsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyActionsArgs: ["data", "where"],
  UpdateOneActionsArgs: ["data", "where"],
  UpsertOneActionsArgs: ["where", "create", "update"],
  AggregateNotificationsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyNotificationsArgs: ["data", "skipDuplicates"],
  CreateOneNotificationsArgs: ["data"],
  DeleteManyNotificationsArgs: ["where"],
  DeleteOneNotificationsArgs: ["where"],
  FindFirstNotificationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstNotificationsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueNotificationsArgs: ["where"],
  FindUniqueNotificationsOrThrowArgs: ["where"],
  GroupByNotificationsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyNotificationsArgs: ["data", "where"],
  UpdateOneNotificationsArgs: ["data", "where"],
  UpsertOneNotificationsArgs: ["where", "create", "update"],
  AggregateTasksArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTasksArgs: ["data", "skipDuplicates"],
  CreateOneTasksArgs: ["data"],
  DeleteManyTasksArgs: ["where"],
  DeleteOneTasksArgs: ["where"],
  FindFirstTasksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTasksOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTasksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTasksArgs: ["where"],
  FindUniqueTasksOrThrowArgs: ["where"],
  GroupByTasksArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTasksArgs: ["data", "where"],
  UpdateOneTasksArgs: ["data", "where"],
  UpsertOneTasksArgs: ["where", "create", "update"],
  AggregateCommentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentsArgs: ["data", "skipDuplicates"],
  CreateOneCommentsArgs: ["data"],
  DeleteManyCommentsArgs: ["where"],
  DeleteOneCommentsArgs: ["where"],
  FindFirstCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCommentsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentsArgs: ["where"],
  FindUniqueCommentsOrThrowArgs: ["where"],
  GroupByCommentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentsArgs: ["data", "where"],
  UpdateOneCommentsArgs: ["data", "where"],
  UpsertOneCommentsArgs: ["where", "create", "update"],
  AggregateAssigneesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssigneesArgs: ["data", "skipDuplicates"],
  CreateOneAssigneesArgs: ["data"],
  DeleteManyAssigneesArgs: ["where"],
  DeleteOneAssigneesArgs: ["where"],
  FindFirstAssigneesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAssigneesOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssigneesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssigneesArgs: ["where"],
  FindUniqueAssigneesOrThrowArgs: ["where"],
  GroupByAssigneesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssigneesArgs: ["data", "where"],
  UpdateOneAssigneesArgs: ["data", "where"],
  UpsertOneAssigneesArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Users: relationResolvers.UsersRelationsResolver,
  Actions: relationResolvers.ActionsRelationsResolver,
  Notifications: relationResolvers.NotificationsRelationsResolver,
  Tasks: relationResolvers.TasksRelationsResolver,
  Comments: relationResolvers.CommentsRelationsResolver,
  Assignees: relationResolvers.AssigneesRelationsResolver
};
const relationResolversInfo = {
  Users: ["assignees", "tasks", "notifications", "comments"],
  Actions: ["notifications"],
  Notifications: ["users", "actions"],
  Tasks: ["users", "assignees", "comments"],
  Comments: ["users", "tasks"],
  Assignees: ["tasks", "users"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Users: ["id", "email", "active", "preferences", "last_sign_in_at", "created_at", "updated_at"],
  Actions: ["id", "group", "name", "target_id", "target_type"],
  Notifications: ["id", "user_id", "action_id", "readed_at"],
  Tasks: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  Comments: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  Assignees: ["id", "task_id", "user_id", "created_at"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUsers: ["_count", "_min", "_max"],
  UsersGroupBy: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateActions: ["_count", "_min", "_max"],
  ActionsGroupBy: ["id", "group", "name", "target_id", "target_type", "_count", "_min", "_max"],
  AggregateNotifications: ["_count", "_min", "_max"],
  NotificationsGroupBy: ["id", "user_id", "action_id", "readed_at", "_count", "_min", "_max"],
  AggregateTasks: ["_count", "_min", "_max"],
  TasksGroupBy: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_count", "_min", "_max"],
  AggregateComments: ["_count", "_min", "_max"],
  CommentsGroupBy: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateAssignees: ["_count", "_min", "_max"],
  AssigneesGroupBy: ["id", "task_id", "user_id", "created_at", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UsersCount: ["tasks", "notifications", "comments"],
  UsersCountAggregate: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "_all"],
  UsersMinAggregate: ["id", "email", "password", "password_digest", "active", "last_sign_in_at", "created_at", "updated_at"],
  UsersMaxAggregate: ["id", "email", "password", "password_digest", "active", "last_sign_in_at", "created_at", "updated_at"],
  ActionsCount: ["notifications"],
  ActionsCountAggregate: ["id", "group", "name", "target_id", "target_type", "_all"],
  ActionsMinAggregate: ["id", "group", "name", "target_id", "target_type"],
  ActionsMaxAggregate: ["id", "group", "name", "target_id", "target_type"],
  NotificationsCountAggregate: ["id", "user_id", "action_id", "readed_at", "_all"],
  NotificationsMinAggregate: ["id", "user_id", "action_id", "readed_at"],
  NotificationsMaxAggregate: ["id", "user_id", "action_id", "readed_at"],
  TasksCount: ["comments"],
  TasksCountAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_all"],
  TasksMinAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TasksMaxAggregate: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  CommentsCountAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_all"],
  CommentsMinAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsMaxAggregate: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneesCountAggregate: ["id", "task_id", "user_id", "created_at", "_all"],
  AssigneesMinAggregate: ["id", "task_id", "user_id", "created_at"],
  AssigneesMaxAggregate: ["id", "task_id", "user_id", "created_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UsersWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "notifications", "comments"],
  UsersOrderByWithRelationInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "notifications", "comments"],
  UsersWhereUniqueInput: ["id", "email"],
  UsersOrderByWithAggregationInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "_count", "_max", "_min"],
  UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at"],
  ActionsWhereInput: ["AND", "OR", "NOT", "id", "group", "name", "target_id", "target_type", "notifications"],
  ActionsOrderByWithRelationInput: ["id", "group", "name", "target_id", "target_type", "notifications"],
  ActionsWhereUniqueInput: ["id"],
  ActionsOrderByWithAggregationInput: ["id", "group", "name", "target_id", "target_type", "_count", "_max", "_min"],
  ActionsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "group", "name", "target_id", "target_type"],
  NotificationsWhereInput: ["AND", "OR", "NOT", "id", "users", "user_id", "actions", "action_id", "readed_at"],
  NotificationsOrderByWithRelationInput: ["id", "users", "user_id", "actions", "action_id", "readed_at"],
  NotificationsWhereUniqueInput: ["id"],
  NotificationsOrderByWithAggregationInput: ["id", "user_id", "action_id", "readed_at", "_count", "_max", "_min"],
  NotificationsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "action_id", "readed_at"],
  TasksWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "users", "owner_id", "due_at", "created_at", "updated_at", "state", "assignees", "comments"],
  TasksOrderByWithRelationInput: ["id", "title", "description", "users", "owner_id", "due_at", "created_at", "updated_at", "state", "assignees", "comments"],
  TasksWhereUniqueInput: ["id"],
  TasksOrderByWithAggregationInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state", "_count", "_max", "_min"],
  TasksScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  CommentsWhereInput: ["AND", "OR", "NOT", "id", "users", "owner_id", "tasks", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsOrderByWithRelationInput: ["id", "users", "owner_id", "tasks", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsWhereUniqueInput: ["id"],
  CommentsOrderByWithAggregationInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at", "_count", "_max", "_min"],
  CommentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneesWhereInput: ["AND", "OR", "NOT", "id", "tasks", "task_id", "users", "user_id", "created_at"],
  AssigneesOrderByWithRelationInput: ["id", "tasks", "task_id", "users", "user_id", "created_at"],
  AssigneesWhereUniqueInput: ["id", "task_id", "user_id"],
  AssigneesOrderByWithAggregationInput: ["id", "task_id", "user_id", "created_at", "_count", "_max", "_min"],
  AssigneesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "task_id", "user_id", "created_at"],
  UsersCreateInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "notifications", "comments"],
  UsersUpdateInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "notifications", "comments"],
  UsersCreateManyInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at"],
  UsersUpdateManyMutationInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at"],
  ActionsCreateInput: ["id", "group", "name", "target_id", "target_type", "notifications"],
  ActionsUpdateInput: ["id", "group", "name", "target_id", "target_type", "notifications"],
  ActionsCreateManyInput: ["id", "group", "name", "target_id", "target_type"],
  ActionsUpdateManyMutationInput: ["id", "group", "name", "target_id", "target_type"],
  NotificationsCreateInput: ["id", "users", "actions", "readed_at"],
  NotificationsUpdateInput: ["id", "users", "actions", "readed_at"],
  NotificationsCreateManyInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationsUpdateManyMutationInput: ["id", "readed_at"],
  TasksCreateInput: ["id", "title", "description", "users", "due_at", "created_at", "updated_at", "state", "assignees", "comments"],
  TasksUpdateInput: ["id", "title", "description", "users", "due_at", "created_at", "updated_at", "state", "assignees", "comments"],
  TasksCreateManyInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TasksUpdateManyMutationInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state"],
  CommentsCreateInput: ["id", "users", "tasks", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsUpdateInput: ["id", "users", "tasks", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsCreateManyInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsUpdateManyMutationInput: ["id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  AssigneesCreateInput: ["id", "tasks", "users", "created_at"],
  AssigneesUpdateInput: ["id", "tasks", "users", "created_at"],
  AssigneesCreateManyInput: ["id", "task_id", "user_id", "created_at"],
  AssigneesUpdateManyMutationInput: ["id", "created_at"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  JsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AssigneesRelationFilter: ["is", "isNot"],
  TasksListRelationFilter: ["every", "some", "none"],
  NotificationsListRelationFilter: ["every", "some", "none"],
  CommentsListRelationFilter: ["every", "some", "none"],
  TasksOrderByRelationAggregateInput: ["_count"],
  NotificationsOrderByRelationAggregateInput: ["_count"],
  CommentsOrderByRelationAggregateInput: ["_count"],
  UsersCountOrderByAggregateInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at"],
  UsersMaxOrderByAggregateInput: ["id", "email", "password", "password_digest", "active", "last_sign_in_at", "created_at", "updated_at"],
  UsersMinOrderByAggregateInput: ["id", "email", "password", "password_digest", "active", "last_sign_in_at", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  JsonNullableWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumActionGroupFilter: ["equals", "in", "notIn", "not"],
  EnumActionNameFilter: ["equals", "in", "notIn", "not"],
  EnumActionTargetTypeFilter: ["equals", "in", "notIn", "not"],
  ActionsCountOrderByAggregateInput: ["id", "group", "name", "target_id", "target_type"],
  ActionsMaxOrderByAggregateInput: ["id", "group", "name", "target_id", "target_type"],
  ActionsMinOrderByAggregateInput: ["id", "group", "name", "target_id", "target_type"],
  EnumActionGroupWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumActionNameWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumActionTargetTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UsersRelationFilter: ["is", "isNot"],
  ActionsRelationFilter: ["is", "isNot"],
  NotificationsCountOrderByAggregateInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationsMaxOrderByAggregateInput: ["id", "user_id", "action_id", "readed_at"],
  NotificationsMinOrderByAggregateInput: ["id", "user_id", "action_id", "readed_at"],
  EnumTaskStateFilter: ["equals", "in", "notIn", "not"],
  TasksCountOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TasksMaxOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  TasksMinOrderByAggregateInput: ["id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  EnumTaskStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  TasksRelationFilter: ["is", "isNot"],
  EnumCommentTargetTypeFilter: ["equals", "in", "notIn", "not"],
  CommentsCountOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsMaxOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsMinOrderByAggregateInput: ["id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  EnumCommentTargetTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  AssigneesCountOrderByAggregateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneesMaxOrderByAggregateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneesMinOrderByAggregateInput: ["id", "task_id", "user_id", "created_at"],
  AssigneesCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  TasksCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationsCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentsCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  AssigneesUpdateOneWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TasksUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationsUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentsUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationsCreateNestedManyWithoutActionsInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumActionGroupFieldUpdateOperationsInput: ["set"],
  EnumActionNameFieldUpdateOperationsInput: ["set"],
  EnumActionTargetTypeFieldUpdateOperationsInput: ["set"],
  NotificationsUpdateManyWithoutActionsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UsersCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  ActionsCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UsersUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ActionsUpdateOneRequiredWithoutNotificationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UsersCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  AssigneesCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  CommentsCreateNestedManyWithoutTasksInput: ["create", "connectOrCreate", "createMany", "connect"],
  UsersUpdateOneRequiredWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumTaskStateFieldUpdateOperationsInput: ["set"],
  AssigneesUpdateOneWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CommentsUpdateManyWithoutTasksNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UsersCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  TasksCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UsersUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TasksUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumCommentTargetTypeFieldUpdateOperationsInput: ["set"],
  TasksCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  UsersCreateNestedOneWithoutAssigneesInput: ["create", "connectOrCreate", "connect"],
  TasksUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UsersUpdateOneRequiredWithoutAssigneesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedJsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumActionGroupFilter: ["equals", "in", "notIn", "not"],
  NestedEnumActionNameFilter: ["equals", "in", "notIn", "not"],
  NestedEnumActionTargetTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumActionGroupWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumActionNameWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumActionTargetTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumTaskStateFilter: ["equals", "in", "notIn", "not"],
  NestedEnumTaskStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumCommentTargetTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumCommentTargetTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  AssigneesCreateWithoutUsersInput: ["id", "tasks", "created_at"],
  AssigneesCreateOrConnectWithoutUsersInput: ["where", "create"],
  TasksCreateWithoutUsersInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state", "assignees", "comments"],
  TasksCreateOrConnectWithoutUsersInput: ["where", "create"],
  TasksCreateManyUsersInputEnvelope: ["data", "skipDuplicates"],
  NotificationsCreateWithoutUsersInput: ["id", "actions", "readed_at"],
  NotificationsCreateOrConnectWithoutUsersInput: ["where", "create"],
  NotificationsCreateManyUsersInputEnvelope: ["data", "skipDuplicates"],
  CommentsCreateWithoutUsersInput: ["id", "tasks", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsCreateOrConnectWithoutUsersInput: ["where", "create"],
  CommentsCreateManyUsersInputEnvelope: ["data", "skipDuplicates"],
  AssigneesUpsertWithoutUsersInput: ["update", "create"],
  AssigneesUpdateWithoutUsersInput: ["id", "tasks", "created_at"],
  TasksUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  TasksUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  TasksUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  TasksScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "owner_id", "due_at", "created_at", "updated_at", "state"],
  NotificationsUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  NotificationsUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  NotificationsUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  NotificationsScalarWhereInput: ["AND", "OR", "NOT", "id", "user_id", "action_id", "readed_at"],
  CommentsUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  CommentsUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  CommentsUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  CommentsScalarWhereInput: ["AND", "OR", "NOT", "id", "owner_id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  NotificationsCreateWithoutActionsInput: ["id", "users", "readed_at"],
  NotificationsCreateOrConnectWithoutActionsInput: ["where", "create"],
  NotificationsCreateManyActionsInputEnvelope: ["data", "skipDuplicates"],
  NotificationsUpsertWithWhereUniqueWithoutActionsInput: ["where", "update", "create"],
  NotificationsUpdateWithWhereUniqueWithoutActionsInput: ["where", "data"],
  NotificationsUpdateManyWithWhereWithoutActionsInput: ["where", "data"],
  UsersCreateWithoutNotificationsInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "comments"],
  UsersCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  ActionsCreateWithoutNotificationsInput: ["id", "group", "name", "target_id", "target_type"],
  ActionsCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UsersUpsertWithoutNotificationsInput: ["update", "create"],
  UsersUpdateWithoutNotificationsInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "comments"],
  ActionsUpsertWithoutNotificationsInput: ["update", "create"],
  ActionsUpdateWithoutNotificationsInput: ["id", "group", "name", "target_id", "target_type"],
  UsersCreateWithoutTasksInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "notifications", "comments"],
  UsersCreateOrConnectWithoutTasksInput: ["where", "create"],
  AssigneesCreateWithoutTasksInput: ["id", "users", "created_at"],
  AssigneesCreateOrConnectWithoutTasksInput: ["where", "create"],
  CommentsCreateWithoutTasksInput: ["id", "users", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsCreateOrConnectWithoutTasksInput: ["where", "create"],
  CommentsCreateManyTasksInputEnvelope: ["data", "skipDuplicates"],
  UsersUpsertWithoutTasksInput: ["update", "create"],
  UsersUpdateWithoutTasksInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "notifications", "comments"],
  AssigneesUpsertWithoutTasksInput: ["update", "create"],
  AssigneesUpdateWithoutTasksInput: ["id", "users", "created_at"],
  CommentsUpsertWithWhereUniqueWithoutTasksInput: ["where", "update", "create"],
  CommentsUpdateWithWhereUniqueWithoutTasksInput: ["where", "data"],
  CommentsUpdateManyWithWhereWithoutTasksInput: ["where", "data"],
  UsersCreateWithoutCommentsInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "notifications"],
  UsersCreateOrConnectWithoutCommentsInput: ["where", "create"],
  TasksCreateWithoutCommentsInput: ["id", "title", "description", "users", "due_at", "created_at", "updated_at", "state", "assignees"],
  TasksCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UsersUpsertWithoutCommentsInput: ["update", "create"],
  UsersUpdateWithoutCommentsInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "assignees", "tasks", "notifications"],
  TasksUpsertWithoutCommentsInput: ["update", "create"],
  TasksUpdateWithoutCommentsInput: ["id", "title", "description", "users", "due_at", "created_at", "updated_at", "state", "assignees"],
  TasksCreateWithoutAssigneesInput: ["id", "title", "description", "users", "due_at", "created_at", "updated_at", "state", "comments"],
  TasksCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  UsersCreateWithoutAssigneesInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "tasks", "notifications", "comments"],
  UsersCreateOrConnectWithoutAssigneesInput: ["where", "create"],
  TasksUpsertWithoutAssigneesInput: ["update", "create"],
  TasksUpdateWithoutAssigneesInput: ["id", "title", "description", "users", "due_at", "created_at", "updated_at", "state", "comments"],
  UsersUpsertWithoutAssigneesInput: ["update", "create"],
  UsersUpdateWithoutAssigneesInput: ["id", "email", "password", "password_digest", "active", "preferences", "last_sign_in_at", "created_at", "updated_at", "tasks", "notifications", "comments"],
  TasksCreateManyUsersInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state"],
  NotificationsCreateManyUsersInput: ["id", "action_id", "readed_at"],
  CommentsCreateManyUsersInput: ["id", "target_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  TasksUpdateWithoutUsersInput: ["id", "title", "description", "due_at", "created_at", "updated_at", "state", "assignees", "comments"],
  NotificationsUpdateWithoutUsersInput: ["id", "actions", "readed_at"],
  CommentsUpdateWithoutUsersInput: ["id", "tasks", "target_type", "parent_id", "content", "created_at", "updated_at"],
  NotificationsCreateManyActionsInput: ["id", "user_id", "readed_at"],
  NotificationsUpdateWithoutActionsInput: ["id", "users", "readed_at"],
  CommentsCreateManyTasksInput: ["id", "owner_id", "target_type", "parent_id", "content", "created_at", "updated_at"],
  CommentsUpdateWithoutTasksInput: ["id", "users", "target_type", "parent_id", "content", "created_at", "updated_at"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

