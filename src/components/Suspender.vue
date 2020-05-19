<template>
  <p>Component is currently: Unsuspended</p>
</template>

<script>
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export const SuspenderSubject = new Subject();

export default {
  name: 'Suspender',

  setup() {
    return SuspenderSubject.asObservable()
      .pipe(take(1))
      .toPromise();
  }
};
</script>

<style lang="scss" scoped></style>
