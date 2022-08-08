<script lang="ts">
	export let onClick: () => void = () => {
	};
	export let secondary = false;
</script>

<button class={secondary ? "secondary" : ""} on:click={onClick}>
    <slot/>
</button>

<style lang="scss">
    button {
        padding: 16px 32px;
        border: none;
        border-radius: 8px;
        box-shadow: 8px 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.2s;
        cursor: pointer;
        background-color: var(--color-secondary);
        color: var(--color-white);
        letter-spacing: 0.5px;

        &.secondary {
            background-color: var(--color-primary-dark);
        }

        &:hover {
            background-color: var(--color-secondary-dark);
            box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);

            &.secondary {
                background-color: var(--color-primary-darkest);
            }
        }
    }
</style>
